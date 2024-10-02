from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://admin:admin@cluster0.lvar0nb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Criar cliente para conexao com o banco de dados do MongoDB
client = MongoClient(uri, server_api=ServerApi('1'))

def test_connection():
  # Testa se a conexao com o Banco de Dados do MongoDB Funcionou
  try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
  except Exception as e:
    print(e)

# Criacao do banco de dados do documento
db = client.document_db

# Criacao da colecao de documentos no MongoDB
document_collection = db['document_collection']
