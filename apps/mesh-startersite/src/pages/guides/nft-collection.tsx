import { NextPage } from "next";
import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

const NFTCollectionPage: NextPage = () => {
  return (
    <ContentLayout>
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-8">
            Building an NFT Collection
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg mb-8">
              Create your first NFT collection on Cardano using MeshJS. Learn to
              mint unique digital assets, manage metadata, and build a complete
              NFT marketplace experience.
            </p>

            <div className="grid gap-8 mt-12">
              {/* Prerequisites */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Prerequisites
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Basic understanding of Cardano transactions</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>MeshJS wallet integration</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Test ADA for transaction fees</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>NFT metadata and images ready</div>
                  </div>
                </div>
              </div>

              {/* Project Structure */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Project Structure
                </h2>
                <div className="bg-surface border border-border rounded-lg p-4 font-mono text-sm">
                  <div className="text-text-secondary">nft-collection/</div>
                  <div className="ml-4 text-text-secondary">├── src/</div>
                  <div className="ml-8 text-text-secondary">
                    ├── components/
                  </div>
                  <div className="ml-12 text-text-secondary">
                    ├── NFTMinter.tsx
                  </div>
                  <div className="ml-12 text-text-secondary">
                    ├── NFTGallery.tsx
                  </div>
                  <div className="ml-8 text-text-secondary">├── utils/</div>
                  <div className="ml-12 text-text-secondary">
                    ├── metadata.ts
                  </div>
                  <div className="ml-12 text-text-secondary">
                    ├── minting.ts
                  </div>
                  <div className="ml-4 text-text-secondary">├── assets/</div>
                  <div className="ml-8 text-text-secondary">├── images/</div>
                  <div className="ml-8 text-text-secondary">├── metadata/</div>
                  <div className="ml-4 text-text-secondary">
                    ├── package.json
                  </div>
                  <div className="ml-4 text-text-secondary">└── README.md</div>
                </div>
              </div>

              {/* Implementation Steps */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Implementation Steps
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 1: Setup Project
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Initialize your NFT collection project with MeshJS
                      dependencies.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        npm create meshjs-nft-collection
                      </div>
                      <div className="text-text-secondary">
                        cd nft-collection
                      </div>
                      <div className="text-text-secondary">npm install</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 2: Create Metadata
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Define NFT metadata following CIP-25 standard.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">{`{`}</div>
                      <div className="text-text-secondary ml-4">{`"721": {`}</div>
                      <div className="text-text-secondary ml-8">{`"policy_id": "your_policy_id",`}</div>
                      <div className="text-text-secondary ml-8">{`"asset_name": "NFT #1",`}</div>
                      <div className="text-text-secondary ml-8">{`"name": "My First NFT",`}</div>
                      <div className="text-text-secondary ml-8">{`"description": "A unique digital asset",`}</div>
                      <div className="text-text-secondary ml-8">{`"image": "ipfs://QmHash"`}</div>
                      <div className="text-text-secondary ml-4">{`}`}</div>
                      <div className="text-text-secondary">{`}`}</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 3: Mint NFTs
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Build the minting transaction using MeshJS.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        const txBuilder = new MeshTxBuilder()
                      </div>
                      <div className="text-text-secondary">
                        .mintAsset(policyId, assetName, quantity)
                      </div>
                      <div className="text-text-secondary">
                        .sendLovelace(address, amount)
                      </div>
                      <div className="text-text-secondary">
                        .changeAddress(address);
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 4: Build UI
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Create a user-friendly interface for minting and viewing
                      NFTs.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">{`<NFTMinter />`}</div>
                      <div className="text-text-secondary">{`<NFTGallery />`}</div>
                      <div className="text-text-secondary">{`<WalletConnect />`}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Concepts */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Key Concepts
                </h2>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Policy ID
                      </h4>
                      <p className="text-text-secondary">
                        Unique identifier for your NFT collection
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Asset Name
                      </h4>
                      <p className="text-text-secondary">
                        Individual NFT identifier within the collection
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Metadata
                      </h4>
                      <p className="text-text-secondary">
                        JSON data describing NFT properties and attributes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Minting
                      </h4>
                      <p className="text-text-secondary">
                        Process of creating new NFTs on the blockchain
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Challenges */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Common Challenges
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Metadata Validation
                      </strong>{" "}
                      - Ensure CIP-25 compliance
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Transaction Fees
                      </strong>{" "}
                      - Account for network fees
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Image Storage
                      </strong>{" "}
                      - Use IPFS or decentralized storage
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Batch Minting
                      </strong>{" "}
                      - Optimize for multiple NFTs
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Ready to Build?
              </h3>
              <p className="text-text-secondary mb-4">
                Start with the basic NFT minting tutorial and gradually build up
                to a complete collection with marketplace features.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-hover text-surface px-4 py-2 rounded-lg transition-colors">
                  Start Tutorial
                </button>
                <button className="border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
};

export default NFTCollectionPage;
