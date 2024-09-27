from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.document_routes import router

app = FastAPI()
origins = [
  'http://localhost:3000',
  'http://localhost:5173',
]
app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["GET", "POST", 'DELETE'],
  allow_headers=["*"],
  )

app.include_router(router)
