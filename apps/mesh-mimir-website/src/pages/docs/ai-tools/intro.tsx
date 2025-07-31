import { NextPage } from "next";
import ContentLayout from "../../../components/ContentLayout";
import ContentSection from "../../../components/ContentSection";

const AIToolsIntroPage: NextPage = () => {
  return (
    <ContentLayout>
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-8">
            AI Tools Revolution
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg mb-8">
              Welcome to the future of Cardano development. AI-powered tools are
              transforming how we write, debug, and deploy smart contracts.
              Learn to leverage these cutting-edge technologies to accelerate
              your blockchain development journey.
            </p>

            <div className="grid gap-8 mt-12">
              {/* The Revolution */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Why AI Tools Matter
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        10x Faster Development
                      </strong>{" "}
                      - Generate boilerplate and complex logic in seconds
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Reduced Learning Curve
                      </strong>{" "}
                      - AI explains complex concepts in plain English
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">Fewer Bugs</strong>{" "}
                      - AI catches common mistakes before they reach production
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Better Documentation
                      </strong>{" "}
                      - Auto-generate comprehensive docs and comments
                    </div>
                  </div>
                </div>
              </div>

              {/* Available Tools */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Available AI Tools
                </h2>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-surface font-bold text-lg flex-shrink-0">
                      C
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        Cursor
                      </h3>
                      <p className="text-text-secondary mb-3">
                        AI-powered code editor with advanced autocomplete,
                        refactoring, and intelligent code generation. Perfect
                        for TypeScript and React development.
                      </p>
                      <div className="flex gap-2">
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                          Free Tier
                        </span>
                        <span className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs">
                          Pro Features
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-surface font-bold text-lg flex-shrink-0">
                      W
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        Windsurf
                      </h3>
                      <p className="text-text-secondary mb-3">
                        Specialized AI assistant for blockchain development with
                        deep knowledge of Cardano, Plutus, and MeshJS.
                        Context-aware code suggestions.
                      </p>
                      <div className="flex gap-2">
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                          Blockchain Focused
                        </span>
                        <span className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs">
                          Cardano Native
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-surface font-bold text-lg flex-shrink-0">
                      G
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        ChatGPT
                      </h3>
                      <p className="text-text-secondary mb-3">
                        General-purpose AI assistant for brainstorming,
                        problem-solving, and learning new concepts. Great for
                        understanding complex topics.
                      </p>
                      <div className="flex gap-2">
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                          Free Tier
                        </span>
                        <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-xs">
                          GPT-4
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Getting Started */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Getting Started
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      1
                    </span>
                    <div>Choose your primary AI tool based on your needs</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      2
                    </span>
                    <div>Set up the development environment and extensions</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      3
                    </span>
                    <div>Learn effective prompting techniques</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      4
                    </span>
                    <div>Practice with simple Cardano projects</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      5
                    </span>
                    <div>Gradually integrate AI into your workflow</div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Best Practices
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">Be Specific</strong>{" "}
                      - Provide clear, detailed prompts for better results
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">Review Code</strong>{" "}
                      - Always review and understand AI-generated code
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">Iterate</strong> -
                      Use AI as a starting point, then refine and improve
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">Learn</strong> - Use
                      AI explanations to deepen your understanding
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Ready to Begin?
              </h3>
              <p className="text-text-secondary mb-4">
                Choose your AI tool and start your journey into AI-powered
                Cardano development. Each tool has its strengths - find what
                works best for your workflow.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-hover text-surface px-4 py-2 rounded-lg transition-colors">
                  Choose Your Tool
                </button>
                <button className="border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors">
                  View Setup Guides
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
};

export default AIToolsIntroPage;
