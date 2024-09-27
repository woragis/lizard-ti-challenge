export interface DocumentInterface {
  _id: string;
  empresa_contratante: Empresa;
  empresa_contratada: Empresa;
  objeto_do_contrato: ObjetoDoContrato;
  obrigacoes_da_empresa_contratada: string;
  detalhes_financeiros: DetalhesFinanceiros;
  informacoes_complementares: string;
  detalhes_e_condicoes_de_pagamento: DetalhesDePagamento;
  disposicoes_finais: string;
  data_do_documento: string;
}

interface Empresa {
  razao_social: string;
  cnpj: string;
  endereco: string;
}

interface ObjetoDoContrato {
  data_inicial: string;
  data_final: string;
  obrigacoes: string;
  descricao_completa: string;
}

interface InformacoesFinanceiras {
  valor: number;
  descricao: string;
}

interface ReceitaOperacionalBruta extends InformacoesFinanceiras {}
interface GastoFixo extends InformacoesFinanceiras {}
interface GastoVariavel extends InformacoesFinanceiras {}
interface GastoManutencaoInvestimento extends InformacoesFinanceiras {}

interface DespesaOperacional {
  gasto_fixo: GastoFixo;
  gasto_variavel: GastoVariavel;
  gasto_manutencao_investimento: GastoManutencaoInvestimento;
}

interface LucroOperacional extends InformacoesFinanceiras {
  porcentagem_relativa: number;
}

interface ResultadoLiquido extends InformacoesFinanceiras {}

interface DetalhesFinanceiros {
  receita_operacional_bruta: ReceitaOperacionalBruta;
  despesa_operacional: DespesaOperacional;
  lucro_operacional: LucroOperacional;
  resultado_liquido: ResultadoLiquido;
  projecao_financeira: string;
}

interface DetalhesDePagamento {
  valor_total: number;
  valor_por_parcela: number;
  parcelas: number;
  data_final: string;
  multa_inicial: number;
  multa_cumulativa: number;
}
