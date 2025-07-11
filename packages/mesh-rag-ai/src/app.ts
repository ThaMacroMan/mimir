import { GithubService } from "./services/githubService";
import dotenv from "dotenv";
dotenv.config()

async function main ()  {
    const github = new GithubService(process.env.GITHUB_TOKEN)
    await github.downloadPlaygroundDocs()
}

main()
