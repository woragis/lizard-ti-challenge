from typing import List
from models.document_models import Document
from pydantic import BaseModel

# Declaração do tipo das 'responses'

class Response(BaseModel):
  message: str

class DocumentsResponse(Response):
  data: List[Document]
