import google.generativeai as genai
from google.generativeai.types import HarmCategory, HarmBlockThreshold
import json
from fastapi import File

# Configuracao da chave de acesso da API do GeminiAI
genai.configure(api_key="AIzaSyDsrxsX6CdFc6wqS1c8QHlg5STyKbl5o2g")

# Configuracao do modelo do GeminiAI
model_name = 'gemini-1.5-flash'

# Configuracao de seguranca do GeminiAI
safety_settings={
  HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
}

# Configuracao de comportamento do GeminiAI
generation_config = {
  "temperature": 0.6,
  "top_k": 0,
  "top_p": 0.95,
  "max_output_tokens": 1000
}

# Configuracao do modelo GeminiAI utilizado
model = genai.GenerativeModel(
  model_name,
  safety_settings,
  generation_config
)

def talk_to_genai_about_file(file, prompt):
  # Funcao em que o GeminiAI recebe o que o frontend falou e o arquivo para que o GeminiAI envio uma resposta
  return model.generate_content(f'{prompt}\nEu estou falando sobre esse arquivo: {file}').text

def send_genai_file(file_path: str, file_name: str):
  # Salva o arquivo na nuvem do GeminiAI para futuros usos
  return genai.upload_file(path=file_path, display_name=file_name)

def get_genai_json(file: File) -> dict:
  # Funcao que usa o GeminiAI para retirar as informacoes do documento
  # Para que essas informacoes sejam salvas no banco de dados posteriormente
  json_formatting_prompt = """
    Me retorne os dados desse documento
    Use esse JSON schema:

    {
      "empresa_contratante": {
        "razao_social": "Empresa Contratante LTDA",
        "cnpj": "12.345.678/0001-90",
        "endereco": "Rua Exemplo, 123, Centro, Cidade, Estado, 12345-678"
      },
      "empresa_contratada": {
        "razao_social": "Empresa Contratada LTDA",
        "cnpj": "98.765.432/0001-01",
        "endereco": "Avenida Exemplo, 456, Bairro, Cidade, Estado, 87654-321"
      },
      "objeto_do_contrato": {
        "data_inicial": "2024-01-01",
        "data_final": "2025-01-01",
        "obrigacoes": "Cumprir todas as cláusulas contratuais.",
        "descricao_completa": "Este contrato estabelece as condições para a prestação de serviços..."
      },
      "informacoes_complementares": "Qualquer informação adicional relevante ao contrato.",
      "detalhes_e_condicoes_de_pagamento": {
        "valor_total": 1000000.00,
        "valor_por_parcela": 200000.00,
        "parcelas": 5,
        "data_final": "2025-01-01",
        "multa_inicial": 2.0,
        "multa_cumulativa": 0.5
      },
      "disposicoes_finais": "As disposições finais sobre o contrato serão aplicadas."
    }
  """

  # Resposta recebida do GeminiAI
  response = model.generate_content([file, json_formatting_prompt])
  text_length = len(response.text)
  # Transforma o json string retornado pelo GeminiAI em dicionario
  # Essa transformacoa é feita para que o mongodb entenda e possa armazenar
  data = json.loads(response.text[8:text_length-4])
  return data

def get_monetary_information(file: File):
  # Funcao que usa o GeminiAI para retirar as informacoes monetarias do documento
  # Para que essas informacoes sejam salvas no banco de dados posteriormente
  json_monetary_formatting = """
    Me retorne os dados monetarios presentes nesse documento
    Usand esse JSON schema:

    {
    "obrigacoes_da_empresa_contratada": "A empresa contratada deve fornecer relatórios mensais.",
    "detalhes_financeiros": {
      "receita_operacional_bruta": {
        "valor": 1000000.00,
        "descricao": "Receita total prevista para o ano."
      },
      "despesa_operacional": {
        "gasto_fixo": {
          "valor": 200000.00,
          "descricao": "Despesas fixas mensais."
        },
        "gasto_variavel": {
          "valor": 300000.00,
          "descricao": "Despesas variáveis relacionadas ao projeto."
        },
        "gasto_manutencao_investimento": {
          "valor": 50000.00,
          "descricao": "Despesas com manutenção e investimento."
        }
      },
      "lucro_operacional": {
        "valor": 500000.00,
        "descricao": "Lucro após deduzir despesas.",
        "porcentagem_relativa": 50.0
      },
      "resultado_liquido": {
        "valor": 450000.00,
        "descricao": "Resultado final após deduções."
      },
      "projecao_financeira": "Projeção de crescimento anual de 10%."
      },
    "data_do_documento": "Data escrita ao final do documento",
    }
  """

  # Resposta recebida do GeminiAI
  response = model.generate_content([file, json_monetary_formatting])
  text_length = len(response.text)
  # Transforma o json string retornado pelo GeminiAI em dicionario
  # Essa transformacoa é feita para que o mongodb entenda e possa armazenar
  data = json.loads(response.text[8:text_length-4])
  return data
