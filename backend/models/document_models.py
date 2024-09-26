from pydantic import BaseModel

class Empresa(BaseModel):
  razao_social: str
  cnpj: str
  endereco: str

class ObjetoDoContrato(BaseModel):
  data_inicial: str
  data_final: str
  obrigacoes: str
  descricao_completa: str

class InformacoesFinanceiras(BaseModel):
  valor: int
  descricao: str

class ReceitaOperacionalBruta(InformacoesFinanceiras): pass
class GastoFixo(InformacoesFinanceiras): pass
class GastoVariavel(InformacoesFinanceiras): pass
class GastoManutencaoInvestimento(InformacoesFinanceiras): pass

class DespesaOperacional(BaseModel):
  gasto_fixo: GastoFixo
  gasto_variavel: GastoVariavel
  gasto_manutencao_investimento: GastoManutencaoInvestimento

class LucroOperacional(InformacoesFinanceiras):
  porcentagem_relativa: float

class ResultadoLiquido(InformacoesFinanceiras): pass

class DetalhesFinanceiros(BaseModel):
  receita_operacional_bruta: ReceitaOperacionalBruta # Receita Bruta
  despesa_operacional: DespesaOperacional # Despesas Operacionais
  lucro_operacional: LucroOperacional # Lucro Operacional
  resultado_liquido: ResultadoLiquido # Resultado Liquido
  projecao_financeira: str

class DetalhesDePagamento(BaseModel):
  valor_total: int
  valor_por_parcela: int
  parcelas: int
  data_final: str
  multa_inicial: float
  multa_cumulativa: float


class Document(BaseModel):
  empresa_contratante: Empresa
  empresa_contratada: Empresa
  objeto_do_contrato: ObjetoDoContrato
  obrigaoes_da_empresa_contratada: str
  detalhes_financeiros: DetalhesFinanceiros
  informacoes_complementares: str
  remuneracao_e_condicoes_de_pagamento: DetalhesDePagamento
  disposicoes_finais: str
  data_do_documento: str