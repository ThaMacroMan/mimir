import { NextPage } from "next";
import ContentLayout from "../../../components/ContentLayout";
import ContentSection from "../../../components/ContentSection";

const CursorSetupPage: NextPage = () => {
  return (
    <ContentLayout>
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-8">
            Cursor Setup Quest
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg mb-8">
              Transform your development experience with Cursor, the AI-powered
              code editor. This guide walks you through installation,
              configuration, and optimization for Cardano development.
            </p>

            <div className="grid gap-8 mt-12">
              {/* Installation */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Installation
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 1: Download Cursor
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Visit the official Cursor website and download for your
                      operating system.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # Visit cursor.sh
                      </div>
                      <div className="text-text-secondary">
                        # Download for macOS, Windows, or Linux
                      </div>
                      <div className="text-text-secondary">
                        # Install the application
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 2: Sign Up
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Create a free account to access AI features and sync
                      settings.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary"># Open Cursor</div>
                      <div className="text-text-secondary">
                        # Click "Sign Up" or "Get Started"
                      </div>
                      <div className="text-text-secondary">
                        # Use GitHub or email to register
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Step 3: Choose Plan
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Start with the free tier, upgrade to Pro for advanced
                      features.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-surface border border-border rounded p-3">
                        <h4 className="text-text-primary font-semibold mb-2">
                          Free Tier
                        </h4>
                        <ul className="text-text-secondary text-sm space-y-1">
                          <li>• Basic AI features</li>
                          <li>• 100 requests/day</li>
                          <li>• Community support</li>
                        </ul>
                      </div>
                      <div className="bg-surface border border-border rounded p-3">
                        <h4 className="text-text-primary font-semibold mb-2">
                          Pro Plan
                        </h4>
                        <ul className="text-text-secondary text-sm space-y-1">
                          <li>• Unlimited requests</li>
                          <li>• Advanced models</li>
                          <li>• Priority support</li>
                        </ul>
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
                      Extensions Setup
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Install essential extensions for Cardano development.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # Install TypeScript extension
                      </div>
                      <div className="text-text-secondary">
                        # Install React/Next.js extensions
                      </div>
                      <div className="text-text-secondary">
                        # Install Tailwind CSS IntelliSense
                      </div>
                      <div className="text-text-secondary">
                        # Install Prettier formatter
                      </div>
                      <div className="text-text-secondary">
                        # Install ESLint linter
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Settings Optimization
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Configure Cursor for optimal Cardano development
                      experience.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">{`// settings.json`}</div>
                      <div className="text-text-secondary">{`{`}</div>
                      <div className="text-text-secondary ml-4">{`"editor.formatOnSave": true,`}</div>
                      <div className="text-text-secondary ml-4">{`"editor.codeActionsOnSave": {`}</div>
                      <div className="text-text-secondary ml-8">{`"source.fixAll.eslint": true`}</div>
                      <div className="text-text-secondary ml-4">{`},`}</div>
                      <div className="text-text-secondary ml-4">{`"typescript.preferences.includePackageJsonAutoImports": "on"`}</div>
                      <div className="text-text-secondary">{`}`}</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      AI Configuration
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Set up AI models and preferences for better code
                      generation.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # Go to Settings → AI
                      </div>
                      <div className="text-text-secondary">
                        # Choose GPT-4 for best results
                      </div>
                      <div className="text-text-secondary">
                        # Enable "Use AI for completions"
                      </div>
                      <div className="text-text-secondary">
                        # Set context window to maximum
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cardano-Specific Setup */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Cardano-Specific Setup
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      MeshJS Integration
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Configure Cursor to understand MeshJS patterns and
                      conventions.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # Install @meshjs/core
                      </div>
                      <div className="text-text-secondary">
                        npm install @meshjs/core
                      </div>
                      <div className="text-text-secondary">
                        # Add MeshJS types to tsconfig.json
                      </div>
                      <div className="text-text-secondary">
                        # Configure path mapping for imports
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Custom Snippets
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Create snippets for common Cardano development patterns.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">{`// snippets.json`}</div>
                      <div className="text-text-secondary">{`{`}</div>
                      <div className="text-text-secondary ml-4">{`"MeshJS Transaction": {`}</div>
                      <div className="text-text-secondary ml-8">{`"prefix": "mesh-tx",`}</div>
                      <div className="text-text-secondary ml-8">{`"body": [`}</div>
                      <div className="text-text-secondary ml-12">{`"const txBuilder = new MeshTxBuilder()",`}</div>
                      <div className="text-text-secondary ml-12">{`"  .sendLovelace(address, amount)",`}</div>
                      <div className="text-text-secondary ml-12">{`"  .changeAddress(address);"`}</div>
                      <div className="text-text-secondary ml-8">{`]`}</div>
                      <div className="text-text-secondary ml-4">{`}`}</div>
                      <div className="text-text-secondary">{`}`}</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Project Templates
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Set up project templates for common Cardano applications.
                    </p>
                    <div className="bg-surface border border-border rounded p-3 font-mono text-sm">
                      <div className="text-text-secondary">
                        # Create template folders
                      </div>
                      <div className="text-text-secondary">
                        mkdir -p ~/.cursor/templates
                      </div>
                      <div className="text-text-secondary">
                        # Add NFT project template
                      </div>
                      <div className="text-text-secondary">
                        # Add DeFi project template
                      </div>
                      <div className="text-text-secondary">
                        # Add DApp template
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
                        Use Descriptive Comments
                      </h4>
                      <p className="text-text-secondary">
                        Help AI understand your intent with clear comments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Leverage Context
                      </h4>
                      <p className="text-text-secondary">
                        Keep relevant files open for better AI suggestions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Review Generated Code
                      </h4>
                      <p className="text-text-secondary">
                        Always review and understand AI-generated code
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-surface text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">
                        Use Chat for Complex Tasks
                      </h4>
                      <p className="text-text-secondary">
                        Use Cursor Chat for complex refactoring and debugging
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Troubleshooting */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Troubleshooting
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        AI Not Responding
                      </strong>{" "}
                      - Check internet connection and API limits
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Poor Suggestions
                      </strong>{" "}
                      - Ensure TypeScript is properly configured
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Slow Performance
                      </strong>{" "}
                      - Close unnecessary files and extensions
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Context Issues
                      </strong>{" "}
                      - Restart Cursor and reload the workspace
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Ready to Code?
              </h3>
              <p className="text-text-secondary mb-4">
                Cursor is now configured for optimal Cardano development. Start
                with simple projects and gradually explore advanced AI features.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-hover text-surface px-4 py-2 rounded-lg transition-colors">
                  Start First Project
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

export default CursorSetupPage;
