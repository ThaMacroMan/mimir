from fastapi import APIRouter, Request, HTTPException, status
from app.services.github import GithubService

router = APIRouter()

@router.get("/")
async def ingest_docs(req: Request):
  return {}