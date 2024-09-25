from os import environ
from fastapi import FastAPI
from typing import List, Dict
from enum import Enum
from config.database import document_collection

app = FastAPI()


# Database connection
# MongoDB
# client = motor.motor_asyncio.AsyncIOMotorClient(environ["MONGODB_URL"])

# db = client.get_database("college")
# student_collection = db.get_collection("students")

# Test Route
@app.get('/')
async def root():
  return {"message": "Hello World"}

# Get All Documents
@app.get('/documents')
async def read_documents():
  return {"message": ["document 1", "document 2"]}

# Read Document
@app.get('/documents/{document_id}')
async def read_document(document_id: int):
  return {"message": "document " + str(document_id)}

# Create new Document
@app.post('/documents')
async def create_document():
  return {"message": "document " + str(5) + " was created"}

# Update Document
@app.put('/documents/{document_id}')
async def update_document(document_id: int):
  return {"message": "document " + str(document_id) + " was updated"}

# Delete Document
@app.delete('/documents/{document_id}')
async def delete_document(document_id: int):
  return {"message": "deleted document " + str(document_id)}