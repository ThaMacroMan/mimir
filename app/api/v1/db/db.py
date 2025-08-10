from fastapi import APIRouter, HTTPException, Request, status
from app.db.setup_db import setup_db

router = APIRouter()

@router.post("/init")
async def init_db(req: Request):
  try:
    await setup_db()
    return {
      "message": "Database initialization successful"
    }
  except Exception as e:
    raise HTTPException(
      status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
      detail=f"Error initializing the database: {str(e)}"
    )