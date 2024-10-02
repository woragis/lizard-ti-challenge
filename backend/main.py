from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.document_routes import router

# Declarao da variavel do FastAPI
app = FastAPI()

# Configuracao dos URLs permitidos de se conectar com o banco de dados
origins = ['*']

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins, # Configuracao das origems (URLs) permitidas
  allow_credentials=True, # Permicao de headers de seguranca na request (tokens e sessions)
  allow_methods=["*"], # Metodos permitidos de se conectarem
  allow_headers=["*"], # Permicao de headers recebidos no request
)

# Inclui as rotas do documento no app FastAPI
app.include_router(router)
