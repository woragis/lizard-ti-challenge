from pydantic import BaseModel

class DocumentChatRequest(BaseModel):
  prompt: str