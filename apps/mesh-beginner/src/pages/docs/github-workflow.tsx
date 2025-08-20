import { NextPage } from "next";
import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

const GitHubWorkflowPage: NextPage = () => {
  return (
    <ContentLayout>
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-8">
            GitHub Workflow Primer
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg mb-8">
              Master the essential GitHub workflow for collaborative Cardano
              development. Learn branching strategies, pull requests, and CI/CD
              practices that keep your projects organized and maintainable.
            </p>

            <div className="grid gap-8 mt-12">
              {/* Branching Strategy */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Branching Strategy
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">main</strong> -
                      Production-ready code
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">develop</strong> -
                      Integration branch
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">feature/*</strong> -
                      New features
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-text-primary">hotfix/*</strong> -
                      Critical fixes
                    </div>
                  </div>
                </div>
              </div>

              {/* Pull Request Process */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Pull Request Process
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      1
                    </span>
                    <div>Create feature branch from develop</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      2
                    </span>
                    <div>Make atomic commits with clear messages</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      3
                    </span>
                    <div>Write descriptive PR title and description</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      4
                    </span>
                    <div>Request reviews from team members</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-surface font-mono px-2 py-1 rounded text-sm">
                      5
                    </span>
                    <div>Address feedback and merge when approved</div>
                  </div>
                </div>
              </div>

              {/* CI/CD Checks */}
              <div className="bg-surface-elevated border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  CI/CD Checks
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>TypeScript compilation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>ESLint code quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Prettier formatting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Unit test coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>E2E test suite</span>
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
                    <div>Keep PRs small and focused on single objectives</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Use conventional commit messages</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Write meaningful commit messages</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Update documentation with code changes</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Test locally before pushing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Next Steps
              </h3>
              <p className="text-text-secondary mb-4">
                Ready to put these practices into action? Start with a simple
                feature branch and work through the complete PR workflow.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-hover text-surface px-4 py-2 rounded-lg transition-colors">
                  Practice Exercise
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

export default GitHubWorkflowPage;
