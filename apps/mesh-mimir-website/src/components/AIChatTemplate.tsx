import React, { useState } from "react";
import { Send, Copy, Loader2, Trash } from "lucide-react";

type Role = "system" | "user" | "assistant";

interface Message {
  id: string;
  role: Role;
  content: string;
}

type ChatMessage = { role: Role; content: string };

interface AIChatTemplateProps {
  apiEndpoint?: string; // POST endpoint that accepts { model, messages }
  model?: string; // default model to send
  placeholder?: string;
  initialSystemPrompt?: string;
  onSend?: (payload: {
    model: string;
    messages: ChatMessage[];
  }) => Promise<string>; // returns assistant reply
  className?: string;
}

export default function AIChatTemplate({
  apiEndpoint = "/api/ai/chat",
  model = "gpt-5-nano",
  placeholder = "Ask the model something...",
  initialSystemPrompt,
  onSend,
  className,
}: AIChatTemplateProps) {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (initialSystemPrompt) {
      return [{ id: "m-system", role: "system", content: initialSystemPrompt }];
    }
    return [];
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const appendMessage = (role: Role, content: string) => {
    setMessages(prev => [
      ...prev,
      { id: `m-${prev.length}-${Date.now()}`, role, content },
    ]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    setError(null);
    const userContent = input.trim();
    appendMessage("user", userContent);
    setInput("");

    // Build a ChatMessage[] explicitly to satisfy the strict Role type
    const payloadMessages: ChatMessage[] = messages.map(m => ({
      role: m.role as Role,
      content: m.content,
    }));
    payloadMessages.push({ role: "user", content: userContent });

    setLoading(true);
    try {
      let assistantReply: string;

      if (onSend) {
        assistantReply = await onSend({ model, messages: payloadMessages });
      } else {
        const res = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model, messages: payloadMessages }),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || `Request failed with status ${res.status}`);
        }

        const json = await res.json();
        // Expect response shape { reply: string } or { output: string }
        assistantReply = json.reply ?? json.output ?? json.result ?? "";
      }

      appendMessage("assistant", assistantReply);
    } catch (err: unknown) {
      console.error(err);
      const errMsg = err instanceof Error ? err.message : String(err);
      setError(errMsg);
      appendMessage("assistant", "(Error: failed to get a response)");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMessages(
      initialSystemPrompt
        ? [{ id: "m-system", role: "system", content: initialSystemPrompt }]
        : []
    );
    setError(null);
    setInput("");
  };

  const copyAll = async () => {
    try {
      const text = messages.map(m => `[${m.role}] ${m.content}`).join("\n\n");
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("copy failed", err);
    }
  };

  return (
    <div
      className={
        className ?? "bg-surface/20 border border-border rounded-lg p-4"
      }
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-display font-semibold text-white">
          AI Chat
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={copyAll}
            className="text-gray-300 px-2 py-1 rounded hover:bg-surface/50"
          >
            <Copy className="w-4 h-4 inline-block mr-2" /> Copy
          </button>
          <button
            onClick={handleClear}
            className="text-gray-300 px-2 py-1 rounded hover:bg-surface/50"
          >
            <Trash className="w-4 h-4 inline-block mr-2" /> Clear
          </button>
        </div>
      </div>

      {/* Messages / Output area */}
      <div className="max-h-72 overflow-y-auto mb-4 p-2 border border-border rounded bg-black/5">
        {messages.length === 0 && (
          <div className="text-gray-400 text-sm">
            No messages yet — start by asking a question.
          </div>
        )}
        {messages.map(msg => (
          <div key={msg.id} className="mb-3">
            <div className="text-xs text-gray-400 mb-1">
              {msg.role.toUpperCase()}
            </div>
            <div
              className={
                msg.role === "assistant"
                  ? "prose prose-invert text-green-200"
                  : "prose prose-invert text-gray-200"
              }
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && <div className="mb-3 text-red-400 text-sm">Error: {error}</div>}

      {/* Input area */}
      <div className="flex gap-3 items-end">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-black/10 rounded p-2 text-sm text-gray-200 border border-border resize-none"
          rows={3}
          onKeyDown={e => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <div className="flex flex-col gap-2">
          <button
            onClick={handleSend}
            disabled={loading}
            className="px-3 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg text-primary text-sm flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            Send
          </button>
          <div className="text-xs text-gray-400">
            Model: <strong className="text-white">{model}</strong>
          </div>
        </div>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        Tip: Press Cmd/Ctrl+Enter to send. The component expects a POST endpoint
        that returns JSON with a 'reply' or 'output' string.
      </div>
    </div>
  );
}
