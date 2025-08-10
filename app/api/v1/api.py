from fastapi import APIRouter
from .db.db import router as db_router

api_router = APIRouter()
api_router.include_router(db_router, prefix="/db", tags=["db"])