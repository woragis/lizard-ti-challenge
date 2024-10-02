import requests
from datetime import datetime

# Testa se o upload de documentos esta funcionando
def test_document_upload():
  backendUri = 'http://localhost:8000/documents'
  file_path = 'mockData/contratoex1.pdf'
  files = {'file': ('contrato.pdf',open(file_path, 'rb'), 'application/pdf')}
  response = requests.post(url=backendUri, files=files)
  print(f"Status Code {response.status_code}")
  print(f"Response Json:\n\t{response.json()}")

if __name__ == '__main__':
  # terminal_command = 'curl -X POST -F "file=@mockData/contratoex1.pdf" ' + backendUri
  test_document_upload()