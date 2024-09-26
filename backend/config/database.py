from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://admin:admin@cluster0.lvar0nb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

def test_connection():
  try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
  except Exception as e:
    print(e)

db = client.document_db

document_collection = db['document_collection']
