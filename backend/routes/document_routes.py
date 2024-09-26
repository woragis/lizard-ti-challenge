from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from models.document_models import Document
from config.database import document_collection
from schema.document_schemas import list_serial
from bson import ObjectId
from controllers.ai_controller import send_genai_file, get_genai_json, get_monetary_information
from controllers.files_controller import write_tmp_file, delete_tmp_file
from controllers.time_controller import get_current_time
from controllers.data_controller import join_dicts

router = APIRouter()

# Test Route
@router.get('/')
async def root():
  return {"message": "Hello World"}

# Get All Documents
@router.get('/documents')
async def read_documents():
  return list_serial(document_collection.find())
  # return documents
  # return JSONResponse(status_code=200, content=documents)

# Upload Document
# Analyze data with GeminiAI
# Store data in MongoDB
@router.post('/documents')
async def upload_pdf(file: UploadFile = File(...)):
    if file.content_type != 'application/pdf':
        raise HTTPException(status_code=400, detail="Invalid file type. Only PDF files are allowed.")

    time_now = get_current_time() # Get Current time to use it in filename
    local_file_name = f"{file.filename}_{time_now}.pdf" # Concat current_time to file_name to prevent errors
    local_file_path = f"tmp/{local_file_name}" # Concat file_name to path directory
    await write_tmp_file(file_path=local_file_path, file=file) # Save received file to tmp directory
    
    genai_file = send_genai_file(local_file_path, local_file_name) # Send saved file to genai
    # print(f"Uploaded file '{genai_file.display_name}' as: {genai_file.uri}")
    file_json = get_genai_json(genai_file)
    monetary_json = get_monetary_information(genai_file)
    full_document_dict = join_dicts(file_json, monetary_json)
    document_collection.insert_one(full_document_dict)
    
    # TODO -- USE MONGODB TO SAVE JSON RESPONSE FROM GENAI
    delete_tmp_file(local_file_path)

    return JSONResponse(status_code=201, content={"message": "file was uploaded successfully" })


# Delete Document
@router.delete('/documents')
async def delete_document(_id: str):
  document_collection.find_one_and_delete({"_id": ObjectId(_id)})
  return {"message": "deleted document with id: " + _id}