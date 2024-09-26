from models.document_models import Document

def individual_serializer(document: Document) -> dict:
  return {
    "_id": str(document['_id']),
  }

def list_serial(documents) -> list:
  return[individual_serializer(document) for document in documents]