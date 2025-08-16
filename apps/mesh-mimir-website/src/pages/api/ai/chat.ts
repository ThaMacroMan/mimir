import type { NextApiRequest, NextApiResponse } from "next";

// Simple proxy to the OpenAI Chat Completions endpoint.
// This route keeps the API key server-side (read from process.env.OPENAI_API_KEY).

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { model = "gpt-5-nano", messages } = req.body ?? {};

  if (!process.env.OPENAI_API_KEY) {
    return res
      .status(500)
      .json({ error: "OPENAI_API_KEY not configured on server" });
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Invalid or empty messages array" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({ model, messages }),
    });

    const text = await response.text();

    if (!response.ok) {
      // If OpenAI returns an error, forward a sanitized message
      console.error("OpenAI error", response.status, text);
      return res.status(response.status).json({ error: text });
    }

    const json = JSON.parse(text);
    // extract assistant reply (Chat Completions shape)
    const reply = json?.choices?.[0]?.message?.content ?? "";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Failed to call OpenAI", err);
    return res.status(500).json({ error: "Failed to call OpenAI API" });
  }
}
