import { GithubService } from "./services/githubService";
import dotenv from "dotenv";
import { setupDatabase } from "./db/setupDB";
dotenv.config()

async function main ()  {
    /* const github = new GithubService(process.env.GITHUB_TOKEN)
    await github.downloadPlaygroundDocs() */
    await setupDatabase();
}

main()
