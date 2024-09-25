from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from backend.models.document_models import Document
from config.database import document_collection
from backend.schema.document_schemas import list_serial, individual_serializer
from bson import ObjectId

router = APIRouter()

# Test Route
@router.get('/')
async def root():
  return {"message": "Hello World"}

# Get All Documents
@router.get('/documents')
async def read_documents():
  documents = list_serial(document_collection.find())
  return documents

# Read Document
@router.get('/documents/{document_id}')
async def read_document(document_id: str):
  document = document_collection.find_one({"_id": ObjectId(document_id)})
  return {"message": "document " + document_id, "document": individual_serializer(document)}

# Upload Document
# Analyze data with GeminiAI
# Store data in MongoDB
@router.post('/documents')
async def upload_pdf(file: UploadFile = File(...)):
    if file.content_type != 'application/pdf':
        raise HTTPException(status_code=400, detail="Invalid file type. Only PDF files are allowed.")

    file_location = f"uploads/{file.filename}"
    with open(file_location, "wb") as f:
        f.write(await file.read())

    return JSONResponse(status_code=201, content={"filename": file.filename, "file_location": file_location})

# Update Document
@router.put('/documents/{document_id}')
async def read_document(document_id: str, document: Document):
  document = document_collection.find_one_and_update({"_id": ObjectId(document_id)}, {"$set", dict(document)})
  return {"message": "document " + document_id, "document": individual_serializer(document)}

# Delete Document
@router.delete('/documents/{document_id}')
async def delete_document(document_id: str):
  document_collection.find_one_and_delete({"_id": ObjectId(document_id)})
  return {"message": "deleted document with id: " + document_id}