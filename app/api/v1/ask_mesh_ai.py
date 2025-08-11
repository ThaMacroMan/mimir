from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from supabase import AsyncClient
import openai

from app.services.openai import OpenAIService
from app.utils.get_context import get_context
from app.db.client import get_db_client

router = APIRouter()
openai_service = OpenAIService()

###########################################################################################################
# MODELS
###########################################################################################################
class Query(BaseModel):
  query: str



###########################################################################################################
# ENDPOINTS
###########################################################################################################
@router.post("/")
async def ask_mesh_ai(body: Query, supabase: AsyncClient = Depends(get_db_client)):
  try:
    embedded_query = await openai_service.embed_query(body.query)
    context = await get_context(embedded_query, supabase)
    generator = await openai_service.get_answer(question=body.query, context=context)
    return StreamingResponse(generator, media_type="text/plain")

  except (openai.APIError, openai.AuthenticationError, openai.RateLimitError) as e:
    raise HTTPException(
      status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
      detail=f"An OpenAI API error occurred: {e}"
    )
  except Exception as e:
    raise HTTPException(
      status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
      detail=f"An unexpected error occurred: {e}"
    )