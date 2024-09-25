from pydantic import BaseModel

class Document(BaseModel):
  name: str
  description: str
  data: bool