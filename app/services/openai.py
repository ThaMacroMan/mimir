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
  async def _chat(self, messages, max_tokens, model="gpt-4o-mini", temperature=0.0, prompt_cache_key=None) -> str:
    kwargs = {
      "model": model,
      "messages": messages,
      "max_tokens": max_tokens,
      "temperature": temperature
    }

    if prompt_cache_key:
      kwargs["prompt_cache_key"] = prompt_cache_key

    response = await self.client.chat.completions.create(**kwargs)
    return response.choices[0].message.content

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
    return response

  @retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(6), reraise=True)
  async def get_batch_embeddings(self, texts: List[str]) -> List[List[float]]:
    response = await self.client.embeddings.create(
      model="text-embedding-3-small",
      input=texts,
      encoding_format="float"
    )

    return [data.embedding for data in response.data]