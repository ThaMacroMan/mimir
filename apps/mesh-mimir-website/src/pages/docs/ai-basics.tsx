import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";
import {
  Callout,
  PromptCard,
  BeforeAfterDiff,
  MicroExercise,
  Quiz,
} from "../../components/mdx";
import AIChatTemplate from "../../components/AIChatTemplate";

export default function AIBasicsPage() {
  return (
    <ContentLayout
      title="AI Basics"
      subtitle="Plain-English intro to AI tools and where they help in your workflow"
    >
      <ContentSection layout="text">
        <div className="prose prose-invert max-w-none">
          <p>
            Artificial Intelligence (AI) is a practical set of tools that help
            you work faster and explore options you might not have considered.
            Treat it as an assistant that amplifies human judgment — not a
            replacement.
          </p>

          <Callout title="Core idea" type="info">
            Use AI to speed iteration and surface alternatives. Always validate
            outputs with tests, reviews, and security checks before merging.
          </Callout>

          <h3>Interactive example — prompt improvements</h3>

          <BeforeAfterDiff
            beforePrompt={"Explain what this function does."}
            afterPrompt={
              "Explain this function in one concise sentence, then list 2 edge cases and a simple test case."
            }
            beforeOutput={"It returns user data."}
            afterOutput={
              "One-line: returns user data from the database. Edge cases: missing userId, DB timeout. Test: mock DB and assert returned fields."
            }
          />

          <PromptCard
            title="Try a practical prompt"
            prompt={
              "Refactor this function to be pure and add a unit test. Return only the code."
            }
            exampleOutput={"export function..."}
          />

          <MicroExercise
            id="exercise-1"
            prompt="Rewrite this commit message: 'fix stuff' to be clear and useful for reviewers."
            hint="Include what changed and why. Mention related issue if any."
            answer={
              "fix: improve user loading - return early when no userId (closes #123)"
            }
          />

          <Quiz
            question="Should you paste API keys into a public AI chat?"
            options={[
              {
                id: "a",
                text: "Yes, it's faster.",
                isCorrect: false,
                explanation: "Never share secrets.",
              },
              {
                id: "b",
                text: "No — remove secrets first.",
                isCorrect: true,
                explanation: "Always remove or redact secrets before sending.",
              },
            ]}
            explanation="Protect secrets: never send private keys, passwords, or personal data to third-party services."
          />

          <h3 className="mt-8">Try it live</h3>
          <p>
            Use the embedded chat below. Your OpenAI API key stays server-side.
          </p>
          <div className="mt-4">
            <AIChatTemplate
              apiEndpoint="/api/ai/chat"
              model="gpt-5-nano"
              initialSystemPrompt={
                "You are a helpful assistant for teaching developers how to use AI responsibly."
              }
            />
          </div>

          <Callout title="Setup & security" type="warning">
            <div className="prose prose-invert max-w-none">
              <p>
                Add your OpenAI API key to the server environment so it is never
                exposed to the client. Create a file named <code>.env</code> at
                the project root with the variable below (do not commit this
                file):
              </p>

              <pre className="bg-black/10 rounded-md p-3 text-sm">
                OPENAI_API_KEY=sk-REPLACE_WITH_YOUR_KEY
              </pre>

              <p>
                The embedded chat calls the server route{" "}
                <code>/api/ai/chat</code>
                which forwards requests to OpenAI. For more details see the
                OpenAI API docs:{" "}
                <a
                  href="https://platform.openai.com/docs/api-reference/introduction"
                  className="text-blue-300 underline"
                >
                  OpenAI API reference
                </a>
                .
              </p>
            </div>
          </Callout>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
