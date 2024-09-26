from models.document_models import Document

def individual_serializer(document: Document) -> dict:
  return {
    "_id": str(document['_id']),
    'empresa_contratante': {
      'razao_social': document['empresa_contratante']['razao_social'],
      'cnpj': document['empresa_contratante']['cnpj'],
      'endereco': document['empresa_contratante']['endereco'],
    },
    'empresa_contratada': {
      'razao_social': document['empresa_contratada']['razao_social'],
      'cnpj': document['empresa_contratada']['cnpj'],
      'endereco': document['empresa_contratada']['endereco'],
    },
    'objeto_do_contrato': {
      'data_inicial': document['objeto_do_contrato']['data_inicial'],
      'data_final': document['objeto_do_contrato']['data_final'],
      'obrigacoes': document['objeto_do_contrato']['obrigacoes'],
      'descricao_completa': document['objeto_do_contrato']['descricao_completa'],
    },
    'informacoes_complementares': document['informacoes_complementares'],
      'disposicoes_finais': document['disposicoes_finais'],
    'obrigacoes_da_empresa_contratada': document['obrigacoes_da_empresa_contratada'],
    'detalhes_financeiros': {
      'receita_operacional_bruta': document['detalhes_financeiros']['receita_operacional_bruta'],
      'despesa_operacional': {
        'gasto_fixo': document['detalhes_financeiros']['despesa_operacional']['gasto_fixo'],
        'gasto_variavel': document['detalhes_financeiros']['despesa_operacional']['gasto_variavel'],
        'gasto_manutencao_investimento': document['detalhes_financeiros']['despesa_operacional']['gasto_manutencao_investimento'],
        },
      'lucro_operacional': {
        'valor': document['detalhes_financeiros']['lucro_operacional']['valor'],
        'descricao': document['detalhes_financeiros']['lucro_operacional']['descricao'],
        },
      'resultado_liquido': {
        'valor': document['detalhes_financeiros']['resultado_liquido']['valor'],
        'descricao': document['detalhes_financeiros']['resultado_liquido']['descricao'],
        },
      'projecao_financeira': document['detalhes_financeiros']['projecao_financeira'],
    },
    'detalhes_e_condicoes_de_pagamento': {
      'valor_total': document['detalhes_e_condicoes_de_pagamento']['valor_total'],
      'valor_por_parcela': document['detalhes_e_condicoes_de_pagamento']['valor_por_parcela'],
      'parcelas': document['detalhes_e_condicoes_de_pagamento']['parcelas'],
      'multa_inicial': document['detalhes_e_condicoes_de_pagamento']['multa_inicial'],
      'multa_cumulativa': document['detalhes_e_condicoes_de_pagamento']['multa_cumulativa'],
      },
      'data_do_documento': document['data_do_documento'],
  }

def list_serial(documents) -> list[Document]:
  return[individual_serializer(document) for document in documents]