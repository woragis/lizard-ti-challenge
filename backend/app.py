from fastapi import FastAPI
from backend.routes.document_routes import router

app = FastAPI()
app.include_router(router)
