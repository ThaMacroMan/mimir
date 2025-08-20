import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AiToolsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the AI tools intro page
    router.replace("/docs/ai-tools/intro");
  }, [router]);

  return null;
}
