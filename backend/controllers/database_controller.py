def save_document_data_on_database(data: dict):
  document_collection.insert_one(data)
