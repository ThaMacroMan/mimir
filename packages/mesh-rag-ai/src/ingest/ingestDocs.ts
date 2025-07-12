import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";
import { encoding_for_model } from "tiktoken";
import { supabase } from "../supabase/supabaseClient";
import { getEmbedding } from "../services/openAIService";


const DOCS_DIR = path.join(__dirname, "../../docs");
const MAX_TOKENS = 8192;
const CHUNK_TARGET = 8000;
const enc = encoding_for_model("gpt-4o-mini");


// helper fn to get .md filepaths
function getAllMDFilePaths(dir: string): string[] {
    let filePaths: string[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for(const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if(entry.isDirectory()) {
            filePaths = filePaths.concat(getAllMDFilePaths(fullPath));
        } else if(entry.isFile() && entry.name.endsWith(".md")) {
            filePaths.push(fullPath);
        }
    }

    return filePaths;
}


// helper fn to get checksum of a doc
function calculateChecksum(content: string): string {
    return crypto.createHash("sha256").update(content).digest("hex");
}

// helper fn to calculate tokens
function getTokenCount(text: string): number {
    return enc.encode(text).length;
}


// function chunk a doc file by methods
function chunkByMethods(content: string): string[] {
    const lines = content.split("\n");
    const chunks: string[] = [];
    let currentChunk: string[] = [];

    for(const line of lines) {
        if(line.startsWith("### ") && currentChunk.length > 0) {
            const chunkText = currentChunk.join("\n").trim();
            if (chunkText) chunks.push(chunkText);
            currentChunk = [line];
        } else if(line.startsWith("## ") && currentChunk.length > 0) {
            const chunkText = currentChunk.join("\n").trim();
            if (chunkText) chunks.push(chunkText);
            currentChunk = [line];
        } else if(line.startsWith("# ") && currentChunk.length > 0) {
            const chunkText = currentChunk.join("\n").trim();
            if (chunkText) chunks.push(chunkText);
            currentChunk = [line];
        } else {
            currentChunk.push(line);
        }
    }

    if(currentChunk.length > 0) {
        const chunkText = currentChunk.join("\n").trim();
        if (chunkText) chunks.push(chunkText);
    }

    return chunks.filter(chunk => chunk.length > 0);
}


// function to merge chunks of larger file
function mergeChunks(chunks: string[], targetTokens: number = CHUNK_TARGET): string[] {
    const mergedChunks: string[] = [];
    let currentMerged = "";
    let currentTokens = 0;

    for(const chunk of chunks) {
        const chunkTokens = getTokenCount(chunk);

        if(currentTokens + chunkTokens > targetTokens && currentMerged.trim()) {
            mergedChunks.push(currentMerged.trim());
            currentMerged = chunk;
            currentTokens = chunkTokens;
        } else {
            currentMerged = currentMerged ? currentMerged + "\n\n" + chunk : chunk;
            currentTokens += chunkTokens;
        }
    }

    if(currentMerged.trim()) {
        mergedChunks.push(currentMerged.trim())
    }

    return mergedChunks;
}


// function to embed a doc file
async function ingestFile(filePath: string) {
    const relativeFilePath = path.relative(DOCS_DIR, filePath);
    console.log(`Processing file: ${relativeFilePath}`);

    const markdownContent = fs.readFileSync(filePath, "utf-8");
    if(markdownContent.trim().length === 0) {
        console.warn(`Skipping empty file: ${relativeFilePath}`);
        return;
    }

    const currentChecksum = calculateChecksum(markdownContent);
    const tokenCount = getTokenCount(markdownContent);

    try {
        const needChunking = tokenCount > MAX_TOKENS;
 
        if(needChunking) {
            console.log(`File ${relativeFilePath} exceeds token limit (${tokenCount} tokens). Processing as chunks...`);

            // check if the doc already exists and compare the checksum
            const { data: trackingRecord, error: trackingError } = await supabase
                .from("documents")
                .select("checksum")
                .eq("filepath", `${relativeFilePath}_tracking`)
                .limit(1);

            if(trackingError) {
                console.error(`Error fetching record for ${relativeFilePath}:`, trackingError.message);
                return;
            }

            const existingChecksum = trackingRecord && trackingRecord.length > 0 ? trackingRecord[0].checksum : null;

            if(existingChecksum === currentChecksum) {
                console.log(`File ${relativeFilePath} is unchanged (checksum matches). Skipping processing.`);
                return;
            }

            console.log(`File ${relativeFilePath} has changed or is new.`);

            // chunk the doc
            const methodChunks = chunkByMethods(markdownContent);
            const finalChunks = mergeChunks(methodChunks);
            console.log(`File split into ${finalChunks.length} chunks`);

            // get old chunk files and update/insert/delete
            const { data: existingChunks, error: fetchError } = await supabase
                .from("documents")
                .select("id, filepath, checksum")
                .like("filepath", `${relativeFilePath}_%`)
                .neq("filepath", `${relativeFilePath}_tracking`);

            
            if(fetchError) {
                console.error(`Error fetching existing chunks for ${relativeFilePath}:`, fetchError.message);
                return;
            }

            for(let i = 0; i < finalChunks.length; i++) {
                const chunkFilePath = `${relativeFilePath}_${i+1}`;
                const chunkContent = finalChunks[i];
                const chunkChecksum = calculateChecksum(chunkContent);
                const chunkTokens = getTokenCount(chunkContent);

                console.log(`Processing chunk ${i+1}/${finalChunks.length}: ${chunkFilePath} (${chunkTokens} tokens)`);

                const existingChunk = existingChunks?.find(chunk => chunk.filepath === chunkFilePath);

                try {
                    const embedding = await getEmbedding(chunkContent);

                    if(existingChunk) {
                        const { error: updateError } = await supabase
                            .from("documents")
                            .update({
                                content: chunkContent,
                                embedding: embedding,
                                checksum: chunkChecksum,
                            })
                            .eq("id", existingChunk.id);

                        if(updateError) {
                            console.error(`Error updating chunk ${chunkFilePath}:`, updateError.message);
                        } else {
                            console.log(`Successfully updated chunk: ${chunkFilePath}`);
                        }
                    } else {
                        const { error: insertError } = await supabase
                            .from("documents")
                            .insert({
                                content: chunkContent,
                                embedding: embedding,
                                filepath: chunkFilePath,
                                checksum: chunkChecksum,
                            });
                        
                        if(insertError) {
                            console.error(`Error inserting chunk ${chunkFilePath}`);
                        } else {
                            console.log(`Successfully inserted chunk: ${chunkFilePath}`);
                        }
                    }
                } catch(chunkError: any) {
                    console.error(`Error processing chunk ${chunkFilePath}:`, chunkError.message);
                }
            }

            // delete chunks that are no longer needed
            const expectedChunkPaths = finalChunks.map((_, i) => `${relativeFilePath}_${i+1}`);
            const extraChunks = existingChunks?.filter(chunk => !expectedChunkPaths.includes(chunk.filepath));

            if(extraChunks && extraChunks.length > 0) {
                console.log(`Removing ${extraChunks.length} extra chunks that are no longer needed...`);
                for(const extraChunk of extraChunks) {
                    const { error: deleteError } = await supabase
                        .from("documents")
                        .delete()
                        .eq("id", extraChunk.id);
                    
                    if(deleteError) {
                        console.error(`Error removing extra chunk ${extraChunk.filepath}:`, deleteError.message);
                    } else {
                        console.log(`Successfully removed extra chunk: ${extraChunk.filepath}`);
                    }
                }
            }

            // update/insert checksum and tracking for the doc which has been changed
            if(existingChecksum) {
                const { error: updateTrackingError } = await supabase
                    .from("documents")
                    .update({ checksum: currentChecksum })
                    .eq("filepath", `${relativeFilePath}_tracking`);
                
                if(updateTrackingError) {
                    console.error(`Error updating tracking record for ${relativeFilePath}:`, updateTrackingError.message);
                }
            } else {
                const { error: trackingInsertError } = await supabase
                    .from("documents")
                    .insert({
                        content: "",
                        embedding: null,
                        filepath: `${relativeFilePath}_tracking`,
                        checksum: currentChecksum,
                    });
                
                if(trackingInsertError) {
                    console.error(`Error inserting tracking record for ${relativeFilePath}:`, trackingInsertError.message);
                }
            }
        } else {
            // embedding for doc which is within the token limit
            console.log(`File ${relativeFilePath} is within the token limit (${tokenCount} tokens)`);

            const { data: existingDocs, error: fetchError } = await supabase
                .from("documents")
                .select("id, checksum")
                .eq("filepath", relativeFilePath)
                .limit(1);
            
            if(fetchError) {
                console.error(`Error fetching existing document for ${relativeFilePath}:`, fetchError.message);
                return;
            }

            const existingDoc = existingDocs && existingDocs.length > 0 ? existingDocs[0] : null;

            if(existingDoc) {
                if(existingDoc.checksum === currentChecksum) {
                    console.log(`File ${relativeFilePath} is unchanged. Skipping update`);
                    return;
                } else {
                    console.log(`File ${relativeFilePath} has changed (checksum mismatch). Updating the embeddings...`);
                    const embedding = await getEmbedding(markdownContent);

                    const { error: updateError } = await supabase
                        .from("documents")
                        .update({
                            content: markdownContent,
                            embedding: embedding,
                            filepath: relativeFilePath,
                            checksum: currentChecksum,
                        });

                    if(updateError) {
                        console.error(`Error updating the document ${relativeFilePath}:`, updateError.message);
                    } else {
                        console.log(`Successfully updated the document: ${relativeFilePath}`);
                    }
                }
            } else {
                console.log(`File ${relativeFilePath} is new. Embedding and inserting....`);
                const embedding = await getEmbedding(markdownContent);

                const { error: insertError } = await supabase
                    .from("documents")
                    .insert({
                        content: markdownContent,
                        embedding: embedding,
                        filepath: relativeFilePath,
                        checksum: currentChecksum,
                    });
                
                if(insertError) {
                    console.error(`Error inserting new document ${relativeFilePath}:`, insertError.message);
                } else {
                    console.log(`Successfully inserted new document: ${relativeFilePath}`);
                }
            }
        }
    }  catch(embeddingOrDBError: any) {
        console.error(`Error processing file ${relativeFilePath}:`, embeddingOrDBError.message || embeddingOrDBError);
    }
}


// main fn
export async function ingestDocs() {
    if(!fs.existsSync(DOCS_DIR)) {
        console.error(`docs directory not found at ${DOCS_DIR}. Please create it and add your markdown files.`);
        return;
    }

    const markdownFiles = getAllMDFilePaths(DOCS_DIR);

    if(markdownFiles.length === 0) {
        console.warn(`No markdown files found in ${DOCS_DIR} or its subfolders`);
        return;
    }

    for(const file of markdownFiles) {
        await ingestFile(file);
    }

    console.log("Ingestion process completed");
}