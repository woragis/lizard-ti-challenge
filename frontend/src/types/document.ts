export interface DocumentInterface {
  _id: string;
  contracting_company: Enterprise;
  contracted_company: Enterprise;
  objeto_do_contrato: ObjetoDoContrato;
  obligations: string;
  financial_details: FinancialDetails;
  complementary_information: string;
  payment_details: PaymentDetails;
  disposicoes_finais: string;
  document_date: string;
}

interface Enterprise {
  corprorate_name: string;
  cnpj: string;
  address: string;
}

interface Enterprise {
  corporate_name: string;
  cnpj: string;
  address: string;
}

interface ObjetoDoContrato {
  init_date: string;
  end_date: string;
  obligations: string;
  complete_description: string;
}

interface MonetaryInformation {
  value: number;
  description: string;
}

interface OperatingRevenue extends MonetaryInformation {}
interface FixedExpenses extends MonetaryInformation {}
interface VariableExpenses extends MonetaryInformation {}
interface InvestmentExpenses extends MonetaryInformation {}

interface OperatingExpense {
  fixed_expenses: FixedExpenses;
  variable_expenses: VariableExpenses;
  investment_expenses: InvestmentExpenses;
}

interface OperatingProfit extends MonetaryInformation {
  relative_percentage: number;
}

interface NetIncome extends MonetaryInformation {}

interface FinancialDetails {
  operating_revenue: OperatingRevenue;
  operating_costs: OperatingExpense;
  operating_profit: OperatingProfit;
  net_income: NetIncome;
  financial_projections: string;
}

interface PaymentDetails {
  total_value: number;
  parcela_value: number;
  parcelas: number;
  end_date: string;
  multa_inicial: number;
  multa_cumulativa: number;
}
