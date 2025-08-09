from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
  return {
    "message": "Welcome home!"
  }

@app.get("/health")
async def get_health_status():
  return {
    "status": "OK"
  }