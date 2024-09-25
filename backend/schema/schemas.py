def individual_serializer(document) -> dict:
  return {
    "id": str(document['id']),
    'name': document['name'],
    'description': document['description'],
  }

def list_serial(documents) -> list:
  return[individual_serializer(document) for document in documents]