import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();


const openaiApiKey = process.env.OPENAI_API_KEY;
if(!openaiApiKey) {
    throw new Error("OPENAI_API_KEY must be define in .env");
}

const openai = new OpenAI({ apiKey: openaiApiKey });

export async function getEmbedding(text: string): Promise<number []> {
    try {
        const response = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: text,
            encoding_format: "float",
        });

        return response.data[0].embedding;
    } catch(error) {
        console.error("Error generating embedding: ", error);
        throw error;
    }
}