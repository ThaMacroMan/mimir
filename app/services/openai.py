from openai import AsyncOpenAI
from dotenv import load_dotenv
load_dotenv()
import os
from typing import List
from tenacity import retry, wait_random_exponential, stop_after_attempt

openai_api_key = os.getenv("OPENAI_KEY") or None
if openai_api_key is None:
  raise ValueError("OpenAI api key is missing")

DOCUMENT_CONTEXT_PROMPT = """
<document>
{doc_content}
</document>
"""

CHUNK_CONTEXT_PROMPT = """
Here is the chunk we want to situate within the whole document
<chunk>
{chunk_content}
</chunk>

Please give a short succinct context to situate this chunk within the overall document for the purposes of improving search retrieval of the chunk.
Answer only with the succinct context and nothing else.
"""

class OpenAIService:
  def __init__(self):
    self.client = AsyncOpenAI(api_key=openai_api_key)

  @retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(6))
  async def _chat(self, messages, model="gpt-4o-mini", temperature=0.0, max_tokens=None, prompt_cache_key=None, stream: bool = False):
    kwargs = {
      "model": model,
      "messages": messages,
      "temperature": temperature,
      "stream": stream
    }

    if prompt_cache_key:
      kwargs["prompt_cache_key"] = prompt_cache_key
    if max_tokens:
      kwargs["max_tokens"] = max_tokens

    return await self.client.chat.completions.create(**kwargs)

  async def situate_context(self, doc: str, chunk: str, cache_key: str) -> str:
    messages = [
      {
        "role": "user",
        "content": DOCUMENT_CONTEXT_PROMPT.format(doc_content=doc)
      },
      {
        "role": "user",
        "content": CHUNK_CONTEXT_PROMPT.format(chunk_content=chunk)
      }
    ]

    response = await self._chat(messages=messages, max_tokens=1024, prompt_cache_key=cache_key)
    return response.choices[0].message.content

  @retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(6), reraise=True)
  async def get_batch_embeddings(self, texts: List[str]) -> List[List[float]]:
    response = await self.client.embeddings.create(
      model="text-embedding-3-small",
      input=texts,
      encoding_format="float"
    )

    return [data.embedding for data in response.data]

  @retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(6), reraise=True)
  async def embed_query(self, text: str) -> List[float]:
    response = await self.client.embeddings.create(
      model="text-embedding-3-small",
      input=text,
      encoding_format="float"
    )

    return response.data[0].embedding

  @retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(6), reraise=True)
  async def get_answer(self, question: str, context: str):
    messages = [
      {
        "role": "system",
        "content": "You are a MeshJS(https://meshjs.dev/) documentation expert specializing in generating clean, well-structured MDX content for technical topics. Your primary goal is to provide helpful, accurate, and easy-to-read documentation for developers.\n\n" +
          "--- Your Task ---\n" +
          "Generate comprehensive documentation in MDX format. Return only high-quality, well-formatted content that is ready for rendering.\n\n" +
          "--- Constraints & Behavior ---\n" +
          "- **NEVER use any JSX or React components.** Return only pure Markdown syntax.\n" +
          "- NEVER wrap the entire response in a single code block.\n" +
          "- Do not include any text outside of the MDX content itself.\n" +
          "- Do not use escaped \\n characters in the final output.\n" +
          "- Be thorough and do not omit any details. If a piece of information is unknown or cannot be provided, state this clearly and concisely. Do not guess.\n" +
          "- If a request is outside your scope of expertise, politely decline and explain your purpose is to generate MDX documentation."
      },
      {
        "role": "user",
        "content": f"""Context: {context}

        Question: {question}""",
      }
    ]

    stream = await self._chat(messages=messages, stream=True)

    async def stream_generator():
      async for chunk in stream:
        content = chunk.choices[0].delta.content
        if content:
          yield content

    return stream_generator()