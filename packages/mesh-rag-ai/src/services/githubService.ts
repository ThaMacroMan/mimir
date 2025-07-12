import * as fs from "fs/promises"
import * as path from "path"

export class GithubService {
    private baseUrl = "https://api.github.com"
    private owner = "MeshJS"
    private repo = "mesh"
    private docPath = "packages"
    private token?: string

    constructor(token?: string) {
        this.token = token
    }

    private getHeaders(): HeadersInit {
        const headers: HeadersInit = {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "MeshJS-RAG"
        }

        if(this.token) {
            headers["Authorization"] = `token ${this.token}`
        }

        return headers
    }

    private async fetchGithubDirectory(remotePath: string) {
        const url = `${this.baseUrl}/repos/${this.owner}/${this.repo}/contents/${remotePath}`;
        const response = await fetch(url, { headers: this.getHeaders() });
        if (!response.ok) {
            throw new Error(`Github API error: ${response.statusText}`);
        }
        return await response.json();
    }

    private async downloadGithubFile(downloadUrl: string): Promise<string> {
        const response = await fetch(downloadUrl, { headers: this.getHeaders() });
        if (!response.ok) {
            throw new Error(`Couldn't download the file: ${downloadUrl}`);
        }
        return await response.text();
    }

    async downloadPlaygroundDocs() {
        const rootLocalDir = path.resolve(process.cwd(), "src", "docs")
        await fs.mkdir(rootLocalDir, { recursive: true })

        const processPath = async (currentPath: string, localDir: string): Promise<void> => {
            try {
                const items = await this.fetchGithubDirectory(currentPath);

                for (const item of items) {
                    const localPath = path.join(localDir, item.name)

                    if (item.type === "file" && item.download_url) {
                        const content = await this.downloadGithubFile(item.download_url);
                        await fs.mkdir(path.dirname(localPath), { recursive: true })
                        await fs.writeFile(localPath, content)
                    } else if (item.type === "dir") {
                        await fs.mkdir(localPath, { recursive: true })
                        await processPath(item.path, localPath)
                    }
                }
            } catch (error) {
                console.error(`Error while processing: ${error}`);
            }
        };

        await processPath(this.docPath, rootLocalDir);
        console.log(`Downloaded '${this.docPath}' to '${rootLocalDir}'`)
    }
}