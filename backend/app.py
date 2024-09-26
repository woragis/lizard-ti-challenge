from fastapi import FastAPI
from routes.document_routes import router

app = FastAPI()
app.include_router(router)
