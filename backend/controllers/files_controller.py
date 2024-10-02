from os import path, remove
from fastapi import UploadFile

def delete_tmp_file(file_path: str):
  # Testa se o arquivo existe
  if path.exists(file_path):
    # Se o arquivo existir ele é deletado da pasta tmp/
    remove(file_path)
  return

async def write_tmp_file(file_path: str, file: UploadFile):
  # Escreve o arquivo localmente para que possa ser enviado ao GeminiAI posteriormente
  with open(file_path, "wb") as f:
    f.write(await file.read())
  return
