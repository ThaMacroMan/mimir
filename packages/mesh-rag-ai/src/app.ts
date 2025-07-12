import { GithubService } from "./services/githubService";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { setupDatabase } from "./supabase/setupDB";
import { ingestDocs } from "./ingest/ingestDocs";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());

app.get("/health", (_, res) => {
    res.status(200).json({ message: "Ok" })
})

app.post("/ingest", async (req, res) => {
    const token = req.headers["x-api-key"];
    if(!token || token !== process.env.INGEST_KEY) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    try {
        await ingestDocs();
        console.log("Docs ingestion successful");
        res.status(200).json({ message: "Docs ingestion successful" })
    } catch(error: any) {
        console.error("Error ingesting the docs:", error.message || error);
        res.status(500).json({ message: "Failed to ingest the docs" })
    }
})

async function startServer()  {
    try {
        /* const github = new GithubService(process.env.GITHUB_TOKEN)
        await github.downloadPlaygroundDocs() */
        await setupDatabase();

        app.listen(PORT, () => {
            console.log("API server is listening on port: ", PORT);
        })
    } catch(error: any) {
        console.error("Error during server startup:", error.message || error);
        process.exit(1);
    }
}


startServer();