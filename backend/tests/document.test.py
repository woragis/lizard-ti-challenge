import requests
from datetime import datetime

backendUri = 'http://localhost:8000/documents'
file_path = 'mockData/contratoex1.pdf'
files = {'file': ('contrato.pdf',open(file_path, 'rb'), 'application/pdf')}
response = requests.post(url=backendUri, files=files)
print(f"Status Code {response.status_code}")
print(f"Response Json:\n\t{response.json()}")

# terminal_command = 'curl -X POST -F "file=@mockData/contratoex1.pdf" ' + backendUri