from pydantic import BaseModel

class Enterprise(BaseModel):
  corporate_name: str
  cnpj: str
  address: str

class ObjetoDoContrato(BaseModel):
  init_date: str
  end_date: str
  obligations: str
  complete_description: str

class MonetaryInformation(BaseModel):
  value: int
  description: str

class OperatingRevenue(MonetaryInformation): pass
class FixedExpenses(MonetaryInformation): pass
class VariableExpenses(MonetaryInformation): pass
class InvestmentExpenses(MonetaryInformation): pass

class OperatingExpense(BaseModel):
  fixed_expenses: FixedExpenses
  variable_expenses: VariableExpenses
  investment_expenses: InvestmentExpenses

class OperatingProfit(MonetaryInformation):
  relative_percentage: float

class NetIncome(MonetaryInformation): pass

class FinancialDetails(BaseModel):
  operating_revenue: OperatingRevenue # Receita Bruta
  operating_costs: OperatingExpense # Despesas Operacionais
  operating_profit: OperatingProfit # Lucro Operacional
  net_income: NetIncome # Resultado Liquido
  financial_projections: str

class PaymentDetails(BaseModel):
  total_value: int
  parcela_value: int
  parcelas: int
  end_date: str
  multa_inicial: float
  multa_cumulativa: float


class Document(BaseModel):
  contracting_company: Enterprise
  contracted_company: Enterprise
  objeto_do_contrato: ObjetoDoContrato
  obligations: str
  financial_details: FinancialDetails
  complementary_information: str
  payment_details: PaymentDetails
  disposicoes_finais: str
  document_date: str