from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from config.database import document_collection
from schema.document_schemas import list_serial
from bson import ObjectId
from controllers.ai_controller import talk_to_genai_about_file, send_genai_file, get_genai_json, get_monetary_information
from controllers.files_controller import write_tmp_file, delete_tmp_file
from controllers.time_controller import get_current_time
from controllers.data_controller import join_dicts
from controllers.database_controller import save_document_data_on_database
from models.chat_models import DocumentChatRequest
router = APIRouter()

# Rota inicial - como teste para ver se sua conexao esta funcionando
@router.get('/')
async def root():
  return {"message": "Hello World"}

# Rota de chat com o GeminiAI
# Recebe o id do documento e envia o documento com esse id para o gemini
# O GeminiAI te envia uma resposta baseada no prompt e no documento
@router.post('/chat/{_id}')
async def talk_to_gemini(_id, request: DocumentChatRequest):
  # Encontra o arquivo dentro do banco de dados para ser enviado ao GeminiAI
  # Arquivo enviado como complemento do que o usuario esta falando
  file = document_collection.find_one({'_id': ObjectId(_id)})
  return talk_to_genai_about_file(file, request.prompt)

# Rota de recebimento de todos os documentos disponiveis no banco de dados
@router.get('/documents')
async def read_documents():
  return list_serial(document_collection.find())

# Rota de envio de documentos, do frontend para o backend
# Nessa funcao o documento é tratado e armazenado no mongodb
@router.post('/documents')
async def upload_pdf(file: UploadFile = File(...)):
  # Testar se o tipo do arquivo é pdf
  if file.content_type != 'application/pdf':
    # Se o arquivo não for pdf, é enviado uma resposta de erro
    raise HTTPException(status_code=400, detail="Invalid file type. Only PDF files are allowed.")

  # Declara o nome do arquivo temporario
  time_now = get_current_time()
  # Variavel que armazena o nome do arquivo local
  local_file_name = f"{file.filename}_{time_now}.pdf"
  # Variavel que armazena o caminho para o arquivo local
  local_file_path = f"tmp/{local_file_name}"

  # Salva o arquivo temporario no diretorio local
  await write_tmp_file(file_path=local_file_path, file=file)

  # Usa o documento salvo localmente para mandar ao GeminiAI para uso posterior
  genai_file = send_genai_file(local_file_path, local_file_name)

  # Cria uma string de json baseada nas informacoes do documento
  # Essa funcao é dividida em dois por limitacao no tamanho da resposta do GeminiAI
  file_json = get_genai_json(genai_file) # Primeira parte do documento
  monetary_json = get_monetary_information(genai_file) # Segunda parte do documento

  # Junta os dois json para que sejam salvos como um unico documento no banco de dados
  full_document_dict = join_dicts(file_json, monetary_json)

  # Salva o documento no banco de dados
  save_document_data_on_database(full_document_dict)

  # Apaga o arquivo temporario do diretorio tmp/
  delete_tmp_file(local_file_path)

  # Envia resposta de confirmacao de que tudo deu certo
  return JSONResponse(status_code=201, content={"message": "file was uploaded successfully" })

# Deleta o documento do banco de dados
@router.delete('/documents/{_id}')
async def delete_document(_id: str):
  # Procura o documento no banco de dados com o id recebido no request
  document_collection.find_one_and_delete({"_id": ObjectId(_id)})
  # Envia uma resposta de confirmação sobre a operação de deletar do documento no banco de dados
  return {"message": "deleted document with id: " + _id}