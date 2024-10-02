from pydantic import BaseModel

# Declaração do tipo da request do chat

class DocumentChatRequest(BaseModel):
  prompt: str