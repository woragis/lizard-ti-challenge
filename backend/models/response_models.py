from typing import List
from models.document_models import Document
from pydantic import BaseModel

class Response(BaseModel):
  message: str

class DocumentsResponse(Response):
  data: List[Document]
