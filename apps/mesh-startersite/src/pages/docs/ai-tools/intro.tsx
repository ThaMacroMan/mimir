import { NextPage } from "next";
import ContentLayout from "../../../components/ContentLayout";
import ContentSection from "../../../components/ContentSection";

const AIToolsIntroPage: NextPage = () => {
  return (
    <ContentLayout>
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-8">
            What are AI Tools?
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg mb-8">
              Think of AI tools as having a super-smart coding partner who never
              gets tired and can help you write code, explain concepts, and
              solve problems. These tools use artificial intelligence to
              understand what you want to build and help you create it faster
              and with fewer mistakes.
            </p>

            <div className="grid gap-8 mt-12">
              {/* What is AI? */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  What is Artificial Intelligence (AI)?
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Artificial Intelligence is like having a computer that can
                    think and learn similar to how humans do. In the context of
                    coding, AI tools can:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-text-primary">
                          Understand your requests
                        </strong>{" "}
                        - You can ask in plain English what you want to build
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-text-primary">
                          Write code for you
                        </strong>{" "}
                        - Generate working code based on your descriptions
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-text-primary">
                          Explain complex concepts
                        </strong>{" "}
                        - Break down difficult topics into simple terms
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-text-primary">
                          Find and fix mistakes
                        </strong>{" "}
                        - Catch errors before they cause problems
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Use AI Tools? */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Why Should Beginners Use AI Tools?
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Learn Faster
                      </strong>{" "}
                      - Get explanations in simple terms instead of struggling
                      through complex documentation
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Build Confidence
                      </strong>{" "}
                      - See working code examples that you can understand and
                      modify
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">Get Unstuck</strong>{" "}
                      - When you're confused, AI can help you figure out what to
                      do next
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Practice Real Projects
                      </strong>{" "}
                      - Start building actual Cardano applications instead of
                      just reading theory
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular AI Tools */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Popular AI Tools for Beginners
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
                        A code editor (like a smart text editor for writing
                        code) that has AI built right into it. You can ask it to
                        write code, explain what code does, or help you fix
                        problems - all while you're working.
                      </p>
                      <div className="flex gap-2">
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                          Free to Start
                        </span>
                        <span className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs">
                          Paid for Advanced Features
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
                        An AI assistant specifically designed to help with
                        blockchain and Cardano development. It knows a lot about
                        Cardano and can help you understand complex blockchain
                        concepts.
                      </p>
                      <div className="flex gap-2">
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                          Blockchain Expert
                        </span>
                        <span className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs">
                          Cardano Focused
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
                        A general AI assistant that can help you learn,
                        brainstorm ideas, and understand new concepts. Great for
                        asking questions and getting explanations about anything
                        you're learning.
                      </p>
                      <div className="flex gap-2">
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                          Free Version Available
                        </span>
                        <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-xs">
                          More Advanced with Paid Plan
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Get Started */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  How to Get Started with AI Tools
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      1
                    </span>
                    <div>
                      Start with ChatGPT to ask questions and learn concepts
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      2
                    </span>
                    <div>Try Cursor when you're ready to write actual code</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      3
                    </span>
                    <div>
                      Use Windsurf when working on Cardano-specific projects
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      4
                    </span>
                    <div>
                      Practice asking clear questions to get better results
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      5
                    </span>
                    <div>
                      Always review and understand the code AI generates for you
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips for Beginners */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Tips for Beginners
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Start Simple
                      </strong>{" "}
                      - Ask basic questions first, then gradually try more
                      complex requests
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">Be Specific</strong>{" "}
                      - Tell AI exactly what you want to build or learn
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Don't Just Copy
                      </strong>{" "}
                      - Try to understand what the code does, not just use it
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">
                        Ask Questions
                      </strong>{" "}
                      - If you don't understand something, ask AI to explain it
                      differently
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Ready to Try AI Tools?
              </h3>
              <p className="text-text-secondary mb-4">
                Don't worry if this all sounds overwhelming - everyone starts
                somewhere! AI tools are designed to make learning easier, not
                harder. Start with simple questions and gradually build your
                confidence.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-hover text-surface px-4 py-2 rounded-lg transition-colors">
                  Choose Your First Tool
                </button>
                <button className="border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors">
                  Learn How to Set Up
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
