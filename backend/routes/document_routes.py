from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from config.database import document_collection
from schema.document_schemas import list_serial
from bson import ObjectId
from controllers.ai_controller import send_genai_file, get_genai_json, get_monetary_information
from controllers.files_controller import write_tmp_file, delete_tmp_file
from controllers.time_controller import get_current_time
from controllers.data_controller import join_dicts
from controllers.database_controller import save_document_data_on_database

router = APIRouter()

@router.get('/')
async def root():
  return {"message": "Hello World"}

@router.get('/documents')
async def read_documents():
  return list_serial(document_collection.find())

@router.post('/documents')
async def upload_pdf(file: UploadFile = File(...)):
  # Test if application is pdf
  if file.content_type != 'application/pdf':
    raise HTTPException(status_code=400, detail="Invalid file type. Only PDF files are allowed.")

  # Initiate local file name and path
  time_now = get_current_time()
  local_file_name = f"{file.filename}_{time_now}.pdf"
  local_file_path = f"tmp/{local_file_name}"

  # Write local file
  await write_tmp_file(file_path=local_file_path, file=file)

  # Send file to genai
  genai_file = send_genai_file(local_file_path, local_file_name)

  # Create Dict from genai document interpretation
  file_json = get_genai_json(genai_file)
  monetary_json = get_monetary_information(genai_file)

  # Join the two Dict parts
  full_document_dict = join_dicts(file_json, monetary_json)

  # Save Dict to MongoDB Database
  save_document_data_on_database(full_document_dict)

  # Delete local file
  delete_tmp_file(local_file_path)

  return JSONResponse(status_code=201, content={"message": "file was uploaded successfully" })

@router.delete('/documents/{_id}')
async def delete_document(_id: str):
  document_collection.find_one_and_delete({"_id": ObjectId(_id)})
  return {"message": "deleted document with id: " + _id}