import { NextPage } from "next";
import ContentLayout from "../../../components/ContentLayout";
import ContentSection from "../../../components/ContentSection";

const WindsurfSetupPage: NextPage = () => {
  return (
    <ContentLayout>
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-8">
            Windsurf Setup
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg mb-8">
              Windsurf is your specialized AI companion for Cardano development.
              Learn to configure this blockchain-focused AI assistant for
              optimal smart contract development and DeFi applications.
            </p>

            <div className="grid gap-8 mt-12">
              {/* What is Windsurf */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  What is Windsurf?
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Windsurf is an AI assistant specifically trained on Cardano
                    ecosystem data, including Plutus smart contracts, MeshJS
                    documentation, and real-world blockchain applications.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-surface border border-border rounded p-4">
                      <h4 className="text-text-primary font-semibold mb-2">
                        Specialized Knowledge
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Plutus smart contracts</li>
                        <li>• Cardano native tokens</li>
                        <li>• DeFi protocols</li>
                        <li>• Security best practices</li>
                      </ul>
                    </div>
                    <div className="bg-surface border border-border rounded p-4">
                      <h4 className="text-text-primary font-semibold mb-2">
                        Context Awareness
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>• Understands your codebase</li>
                        <li>• Suggests relevant patterns</li>
                        <li>• Catches common mistakes</li>
                        <li>• Provides Cardano-specific advice</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Installation */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Installation
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 1: Access Windsurf
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Windsurf is available through various interfaces and
                      integrations.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary"># Web Interface</div>
                      <div className="text-text-secondary">
                        # Visit windsurf.ai
                      </div>
                      <div className="text-text-secondary">
                        # Sign up with GitHub or email
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 2: Choose Your Plan
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Select the plan that fits your development needs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-surface border border-border rounded p-3">
                        <h4 className="text-text-primary font-semibold mb-2">
                          Free
                        </h4>
                        <ul className="text-text-secondary text-sm space-y-1">
                          <li>• Basic queries</li>
                          <li>• Limited context</li>
                          <li>• Community support</li>
                        </ul>
                      </div>
                      <div className="bg-surface border border-border rounded p-3">
                        <h4 className="text-text-primary font-semibold mb-2">
                          Pro
                        </h4>
                        <ul className="text-text-secondary text-sm space-y-1">
                          <li>• Unlimited queries</li>
                          <li>• Full context access</li>
                          <li>• Priority support</li>
                        </ul>
                      </div>
                      <div className="bg-surface border border-border rounded p-3">
                        <h4 className="text-text-primary font-semibold mb-2">
                          Enterprise
                        </h4>
                        <ul className="text-text-secondary text-sm space-y-1">
                          <li>• Custom training</li>
                          <li>• Private deployments</li>
                          <li>• Dedicated support</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 3: Configure Workspace
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Set up your development environment for optimal Windsurf
                      integration.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # Connect your GitHub repository
                      </div>
                      <div className="text-text-secondary">
                        # Configure project settings
                      </div>
                      <div className="text-text-secondary">
                        # Set up API keys (if needed)
                      </div>
                      <div className="text-text-secondary">
                        # Install browser extension
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Configuration */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Configuration
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Project Context
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Help Windsurf understand your project structure and goals.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">{`// windsurf.config.json`}</div>
                      <div className="text-text-secondary">{`{`}</div>
                      <div className="text-text-secondary ml-4">{`"project": "cardano-nft-marketplace",`}</div>
                      <div className="text-text-secondary ml-4">{`"framework": "meshjs",`}</div>
                      <div className="text-text-secondary ml-4">{`"language": "typescript",`}</div>
                      <div className="text-text-secondary ml-4">{`"focus": ["smart-contracts", "defi"]`}</div>
                      <div className="text-text-secondary">{`}`}</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Knowledge Base
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Configure which Cardano resources Windsurf should
                      reference.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # Enable MeshJS documentation
                      </div>
                      <div className="text-text-secondary">
                        # Include Plutus examples
                      </div>
                      <div className="text-text-secondary">
                        # Add security guidelines
                      </div>
                      <div className="text-text-secondary">
                        # Include best practices
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Integration Setup
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Connect Windsurf with your development tools and
                      workflows.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # VS Code extension
                      </div>
                      <div className="text-text-secondary">
                        # GitHub integration
                      </div>
                      <div className="text-text-secondary">
                        # Slack/Discord bot
                      </div>
                      <div className="text-text-secondary">
                        # API access for custom tools
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Patterns */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Usage Patterns
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Smart Contract Development
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Use Windsurf for Plutus smart contract development and
                      optimization.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # "Help me write a Plutus validator"
                      </div>
                      <div className="text-text-secondary">
                        # "Optimize this smart contract"
                      </div>
                      <div className="text-text-secondary">
                        # "Explain this redeemer structure"
                      </div>
                      <div className="text-text-secondary">
                        # "Check for security vulnerabilities"
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      DeFi Application Building
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Get guidance on building DeFi protocols and token swaps.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # "Design an AMM contract"
                      </div>
                      <div className="text-text-secondary">
                        # "Implement yield farming"
                      </div>
                      <div className="text-text-secondary">
                        # "Create liquidity pool logic"
                      </div>
                      <div className="text-text-secondary">
                        # "Handle impermanent loss"
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Debugging and Optimization
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Use Windsurf to debug issues and optimize performance.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # "Why is this transaction failing?"
                      </div>
                      <div className="text-text-secondary">
                        # "Optimize gas usage"
                      </div>
                      <div className="text-text-secondary">
                        # "Fix this validation error"
                      </div>
                      <div className="text-text-secondary">
                        # "Improve transaction efficiency"
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Best Practices
                </h2>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Be Specific
                      </h4>
                      <p className="text-text-secondary">
                        Include context about your project and goals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Share Code
                      </h4>
                      <p className="text-text-secondary">
                        Include relevant code snippets for better assistance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Ask for Explanations
                      </h4>
                      <p className="text-text-secondary">
                        Request detailed explanations of complex concepts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Validate Suggestions
                      </h4>
                      <p className="text-text-secondary">
                        Always test and validate Windsurf's suggestions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Features */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Advanced Features
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">Code Review</strong>{" "}
                      - Get detailed code reviews with security focus
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Architecture Design
                      </strong>{" "}
                      - Plan complex DeFi system architectures
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Testing Strategies
                      </strong>{" "}
                      - Design comprehensive test suites
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Performance Optimization
                      </strong>{" "}
                      - Optimize gas usage and efficiency
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Ready to Surf?
              </h3>
              <p className="text-text-secondary mb-4">
                Windsurf is now configured for your Cardano development journey.
                Start with simple queries and gradually explore advanced
                features for complex projects.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-hover text-surface px-4 py-2 rounded-lg transition-colors">
                  Start First Query
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

export default WindsurfSetupPage;
