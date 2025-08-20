import { NextPage } from "next";
import ContentLayout from "../../../components/ContentLayout";
import ContentSection from "../../../components/ContentSection";

const AIToolSelectionPage: NextPage = () => {
  return (
    <ContentLayout>
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-8">
            Choose Your AI Tool
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg mb-8">
              Not all AI tools are created equal. Each has unique strengths and
              use cases. This guide helps you choose the right tool for your
              Cardano development needs.
            </p>

            <div className="grid gap-8 mt-12">
              {/* Tool Comparison */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Tool Comparison
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 text-text-primary font-semibold">
                          Feature
                        </th>
                        <th className="text-left py-3 text-text-primary font-semibold">
                          Cursor
                        </th>
                        <th className="text-left py-3 text-text-primary font-semibold">
                          Windsurf
                        </th>
                        <th className="text-left py-3 text-text-primary font-semibold">
                          ChatGPT
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium">Code Generation</td>
                        <td className="py-3">⭐⭐⭐⭐⭐</td>
                        <td className="py-3">⭐⭐⭐⭐</td>
                        <td className="py-3">⭐⭐⭐</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium">Cardano Knowledge</td>
                        <td className="py-3">⭐⭐⭐</td>
                        <td className="py-3">⭐⭐⭐⭐⭐</td>
                        <td className="py-3">⭐⭐</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium">Context Awareness</td>
                        <td className="py-3">⭐⭐⭐⭐⭐</td>
                        <td className="py-3">⭐⭐⭐⭐</td>
                        <td className="py-3">⭐⭐</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium">Learning Curve</td>
                        <td className="py-3">⭐⭐⭐</td>
                        <td className="py-3">⭐⭐⭐⭐</td>
                        <td className="py-3">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 font-medium">Cost</td>
                        <td className="py-3">Free/Pro</td>
                        <td className="py-3">Free</td>
                        <td className="py-3">Free/Plus</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Tool Analysis */}
              <div className="grid gap-6">
                {/* Cursor */}
                <div className="bg-surface-elevated border border-border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-surface font-bold text-lg">
                      C
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        Cursor
                      </h3>
                      <p className="text-text-secondary">
                        Best for: Code-heavy development
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        Strengths
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Excellent code completion and generation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Deep integration with your codebase</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Advanced refactoring capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Real-time error detection</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-yellow-500 mb-3">
                        Considerations
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Limited Cardano-specific knowledge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Steeper learning curve</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Resource intensive</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Windsurf */}
                <div className="bg-surface-elevated border border-border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-surface font-bold text-lg">
                      W
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        Windsurf
                      </h3>
                      <p className="text-text-secondary">
                        Best for: Blockchain specialists
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        Strengths
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Deep Cardano and Plutus knowledge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Specialized blockchain guidance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Smart contract best practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Security-focused suggestions</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-yellow-500 mb-3">
                        Considerations
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Limited general programming help</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>May not integrate with your IDE</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Newer tool, evolving rapidly</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ChatGPT */}
                <div className="bg-surface-elevated border border-border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-surface font-bold text-lg">
                      G
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        ChatGPT
                      </h3>
                      <p className="text-text-secondary">
                        Best for: Learning and problem-solving
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        Strengths
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Excellent for learning concepts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Great for brainstorming solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Easy to use and accessible</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Good for documentation help</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-yellow-500 mb-3">
                        Considerations
                      </h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>No direct code integration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Limited Cardano expertise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>May generate outdated code</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decision Matrix */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Decision Matrix
                </h2>
                <div className="grid gap-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Choose Cursor if you:
                    </h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li>• Are building complex applications</li>
                      <li>• Want deep IDE integration</li>
                      <li>• Need advanced code generation</li>
                      <li>• Are comfortable with AI tools</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Choose Windsurf if you:
                    </h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li>• Are focused on Cardano development</li>
                      <li>• Need blockchain-specific guidance</li>
                      <li>• Want security-focused advice</li>
                      <li>• Are building smart contracts</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Choose ChatGPT if you:
                    </h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li>• Are learning Cardano concepts</li>
                      <li>• Need help understanding errors</li>
                      <li>• Want to brainstorm solutions</li>
                      <li>• Prefer a conversational interface</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Made Your Choice?
              </h3>
              <p className="text-text-secondary mb-4">
                Now that you've chosen your AI tool, let's set it up properly
                for Cardano development. Each tool has specific configuration
                requirements.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-hover text-surface px-4 py-2 rounded-lg transition-colors">
                  Setup Cursor
                </button>
                <button className="bg-secondary hover:bg-secondary/80 text-surface px-4 py-2 rounded-lg transition-colors">
                  Setup Windsurf
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-surface px-4 py-2 rounded-lg transition-colors">
                  Setup ChatGPT
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
};

export default AIToolSelectionPage;
