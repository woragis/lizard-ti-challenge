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
import { useMyContext } from "@/store";
import { Input } from "../ui/input";
import { Send } from "lucide-react";
import { ChangeEvent, useState } from "react";
import axios from "axios";

const Document = ({
  _id,
  empresa_contratante: contracting_company,
  empresa_contratada: contracted_company,
  objeto_do_contrato,
  obrigacoes_da_empresa_contratada: obligations,
  detalhes_financeiros: financial_details,
  informacoes_complementares: complementary_information,
  detalhes_e_condicoes_de_pagamento: payment_details,
  disposicoes_finais,
  data_do_documento: document_date,
}: DocumentInterface) => {
  const { deleteDocument, talkToGemini } = useMyContext();
  let operating_costs = financial_details?.despesa_operacional;
  const [inputText, setInputText] = useState<string>("");
  const [chatData, setChatData] = useState<any>([]);
  const chat = chatData.map((text: any) => {
    return <p className="">{text}</p>;
  });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };
  const submitGeminiPrompt = async (event: any) => {
    event.preventDefault();
    talkToGemini(_id, inputText);
    setInputText("");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="hover:cursor-pointer">
          <CardHeader>
            <CardTitle className="font-normal">
              Documento da Empresa:{" "}
              <strong>{contracting_company.razao_social}</strong> com{" "}
              <strong>{contracted_company.razao_social}</strong>
            </CardTitle>
            <CardDescription>
              {document_date}
              <small className="text-zinc-300">document id {_id}</small>
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-white ml-96">
        <div className="w-[500px] h-96 bg-red-500 absolute top-0 left-[-600px] p-5 rounded-3xl flex flex-col justify-between align-center">
          <h1>Talk to Gemini Ai about this document</h1>
          <hr />
          <div className="border h-64 w-[100%]">
            <ul>{chat}</ul>
          </div>
          <form className="flex">
            <Input
              placeholder="talk to Gemini about this document"
              className="rounded-3xl"
              value={inputText}
              onChange={handleInputChange}
            />
            <Button
              size={"icon"}
              variant={"secondary"}
              onClick={submitGeminiPrompt}
            >
              <Send />
            </Button>
          </form>
        </div>

        <DialogHeader>
          <DialogTitle className="text-zinc-800">Document {_id}</DialogTitle>
          <DialogDescription className="text-zinc-500">
            Informações acerca do contrato entre a empresa{" "}
            {contracting_company.razao_social} e{" "}
            {contracted_company.razao_social}
            <br />
            Contrato que vai de {objeto_do_contrato.data_inicial}
            ate {objeto_do_contrato.data_final}
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
              <em>{financial_details.receita_operacional_bruta.valor}</em>
            </div>
            <p>
              Descricao: {financial_details.receita_operacional_bruta.descricao}
            </p>
          </article>
          <article className="mb-5">
            <h4>Despesas Operacionais</h4>
            <ul>
              <li>
                <h5>Despesas Fixas</h5>
                <em>{operating_costs.gasto_fixo.valor}</em>
                <p>{operating_costs.gasto_fixo.descricao}</p>
              </li>
              <li>
                <h5>Despesas Variaveis</h5>
                <em>{operating_costs.gasto_variavel.valor}</em>
                <p>{operating_costs.gasto_variavel.descricao}</p>
              </li>
              <li>
                <h5>Manutencao e Investimentos</h5>
                <em>{operating_costs.gasto_manutencao_investimento.valor}</em>
                <p>{operating_costs.gasto_manutencao_investimento.descricao}</p>
              </li>
            </ul>
          </article>
          <article className="mb-5">
            <div className="flex gap-5">
              <h3>Lucro Operacional</h3>
              <em>
                {financial_details.lucro_operacional.valor} |{" "}
                {financial_details.lucro_operacional.porcentagem_relativa}
              </em>
            </div>
            <p>{financial_details.lucro_operacional.descricao}</p>
          </article>
          <article className="mb-5">
            <div className="flex gap-5">
              <h3>Resultado Liquido</h3>
              <em>{financial_details.resultado_liquido.valor}</em>
            </div>
            <p>{financial_details.resultado_liquido.descricao}</p>
          </article>
          <article className="mb-5">
            <h3>Projeção Financeira</h3>
            <p>{financial_details.projecao_financeira}</p>
          </article>
          <hr />
          <article>
            <h3>Informacoes Complementares</h3>
            <p>{complementary_information}</p>
          </article>
          <article>
            <h3>Remuneração e Condições de Pagamento</h3>
            <p>
              Total a ser pago: <strong>{payment_details.valor_total}</strong>
              <br />
              Multa Inicial: <strong>{payment_details.multa_inicial}</strong>
              <br />
              Multa Cumulativa:{" "}
              <strong>{payment_details.multa_cumulativa}</strong>
              <br />
              Total de Parcelas: <strong>{payment_details.parcelas}</strong>
              <br />
              Valor de cada parcela:{" "}
              <strong>{payment_details.valor_por_parcela}</strong>
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

export default Document;
