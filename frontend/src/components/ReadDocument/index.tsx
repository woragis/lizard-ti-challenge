import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { DocumentInterface } from "@/types/document";
import { useData } from "@/store";

const ReadDocument = ({
  _id,
  contracting_company,
  contracted_company,
  objeto_do_contrato,
  obligations,
  financial_details,
  complementary_information,
  payment_details,
  disposicoes_finais,
  document_date,
}: DocumentInterface) => {
  const { deleteDocument } = useData();
  let operating_costs = financial_details?.operating_costs;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="hover:cursor-pointer">
          <CardHeader>
            <CardTitle className="font-normal">
              Documento da Empresa:{" "}
              <strong>{contracting_company.corporate_name}</strong> com{" "}
              <strong>{contracted_company.corporate_name}</strong>
            </CardTitle>
            <CardDescription>
              {document_date}
              <small className="text-zinc-300">document id {_id}</small>
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-zinc-800">Document {_id}</DialogTitle>
          <DialogDescription className="text-zinc-500">
            Informações acerca do contrato entre a empresa{" "}
            {contracting_company.corporate_name} e{" "}
            {contracted_company.corporate_name}
            <br />
            Contrato que vai de {objeto_do_contrato?.init_date}
            ate {objeto_do_contrato?.end_date}
          </DialogDescription>
        </DialogHeader>
        <hr />
        <div className="h-64 text-sm overflow-y-scroll">
          <h3>Obrigações do Contrato:</h3>
          {obligations}
          <br />
          <article className="mb-5">
            <h3>Detalhes Financeiros:</h3>
            <div className="flex gap-7">
              <h4>Receita Operacional Bruta:</h4>
              <em>{financial_details?.operating_revenue.value}</em>
            </div>
            <p>Descricao: {financial_details?.operating_revenue.description}</p>
          </article>
          <article className="mb-5">
            <h4>Despesas Operacionais</h4>
            <ul>
              <li>
                <h5>Despesas Fixas</h5>
                <em>{operating_costs?.fixed_expenses.value}</em>
                <p>{operating_costs?.fixed_expenses.description}</p>
              </li>
              <li>
                <h5>Despesas Variaveis</h5>
                <em>{operating_costs?.variable_expenses.value}</em>
                <p>{operating_costs?.variable_expenses.description}</p>
              </li>
              <li>
                <h5>Manutencao e Investimentos</h5>
                <em>{operating_costs?.investment_expenses.value}</em>
                <p>{operating_costs?.investment_expenses.description}</p>
              </li>
            </ul>
          </article>
          <article className="mb-5">
            <div className="flex gap-5">
              <h3>Lucro Operacional</h3>
              <em>
                {financial_details?.operating_profit.value} |{" "}
                {financial_details?.operating_profit.relative_percentage}
              </em>
            </div>
            <p>{financial_details?.operating_profit.description}</p>
          </article>
          <article className="mb-5">
            <div className="flex gap-5">
              <h3>Resultado Liquido</h3>
              <em>{financial_details?.net_income.value}</em>
            </div>
            <p>{financial_details?.net_income.description}</p>
          </article>
          <article className="mb-5">
            <h3>Projeção Financeira</h3>
            <p>{financial_details?.financial_projections}</p>
          </article>
          <hr />
          <article>
            <h3>Informacoes Complementares</h3>
            <p>{complementary_information}</p>
          </article>
          <article>
            <h3>Remuneração e Condições de Pagamento</h3>
            <p>
              Total a ser pago: <strong>{payment_details?.total_value}</strong>
              <br />
              Multa Inicial: <strong>{payment_details?.multa_inicial}</strong>
              <br />
              Multa Cumulativa:{" "}
              <strong>{payment_details?.multa_cumulativa}</strong>
              <br />
              Total de Parcelas: <strong>{payment_details?.parcelas}</strong>
              <br />
              Valor de cada parcela:{" "}
              <strong>{payment_details?.parcela_value}</strong>
            </p>
          </article>
          <article>
            <h3>Disposições Finais</h3>
            <p>{disposicoes_finais}</p>
          </article>
        </div>
        <hr />
        <DialogFooter className="flex justify-center align-center gap-4">
          <Button
            type="button"
            variant={"destructive"}
            className="bg-red-600 hover:bg-red-700 active:bg-red-900 text-white font-bold rounded-xl"
            onClick={() => deleteDocument(_id)}
          >
            Delete Document
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReadDocument;
