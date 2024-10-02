from config.database import document_collection

def save_document_data_on_database(data: dict):
  # Salva o json do documento no banco de dados
  document_collection.insert_one(data)
