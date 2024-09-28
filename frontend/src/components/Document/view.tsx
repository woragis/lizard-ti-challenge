import { useDocumentModel } from "./model";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Chat from "../Chat";
import DocumentDialog from "../DocumentDialog";

export const DocumentView = ({
  documentProps,
  open,
  closeDialog,
  fetchDocuments,
  deleteDocument,
}: ReturnType<typeof useDocumentModel>) => {
  const CardTriggerElement = () => {
    return (
      <Card className="hover:cursor-pointer mt-4">
        <CardHeader>
          <CardTitle className="font-normal">
            Documento da Empresa:
            <strong>
              {" "}
              {documentProps.empresa_contratante.razao_social}
            </strong>{" "}
            com{" "}
            <strong>{documentProps.empresa_contratante.razao_social}</strong>
          </CardTitle>
          <CardDescription className="flex justify-between">
            {documentProps.data_do_documento}
            <small className="text-zinc-500 italic">
              document id {documentProps._id}
            </small>
          </CardDescription>
        </CardHeader>
      </Card>
    );
  };
  const DialogContentElement = () => {
    return (
      <div className="w-52">
        <Chat key={`chat-${documentProps._id}`} _id={documentProps._id} />
        <Card className="absolute right-[-550px] h-[500px] top-[-250px] w-[430px] bg-white">
          <CardHeader>
            <CardTitle>
              Documento
              <span className="text-sm text-zinc-400 italic">
                {" "}
                {documentProps._id}
              </span>
            </CardTitle>
            <CardDescription className="text-zinc-800">
              Informações acerca do contrato entre a empresa{" "}
              <strong>{documentProps.empresa_contratante.razao_social}</strong>{" "}
              e{" "}
              <strong>{documentProps.empresa_contratante.razao_social}</strong>
              <br />
              <div className="text-[12px] mt-2">
                Esse contrato que vai de{" "}
                {documentProps.objeto_do_contrato.data_inicial} ate{" "}
                {documentProps.objeto_do_contrato.data_final}
              </div>
            </CardDescription>
          </CardHeader>
          <hr />
          <CardContent className="h-64 text-sm overflow-y-scroll">
            <h3 className="text-[16px] font-bold mt-4">
              Obrigações do Contrato:
            </h3>
            {documentProps.obrigacoes_da_empresa_contratada}
            <br />
            <article className="mb-5 pt-4">
              <hr />
              <h3 className="text-[16px] font-bold mb-4 pt-2">
                Detalhes Financeiros:
              </h3>
              <div className="flex justify-between">
                <h4 className="text-[15px] font-bold">
                  Receita Operacional Bruta:
                </h4>
                <em>
                  R${" "}
                  {
                    documentProps.detalhes_financeiros.receita_operacional_bruta
                      .valor
                  }
                </em>
              </div>
              <p>
                Descricao:{" "}
                {
                  documentProps.detalhes_financeiros.receita_operacional_bruta
                    .descricao
                }
              </p>
            </article>
            <article className="mb-8">
              <h3 className="text-[16px] font-bold mb-4">
                Despesas Operacionais
              </h3>
              <ul>
                <li>
                  <div className="flex justify-between">
                    <h5 className="text-[14px] font-bold">Despesas Fixas</h5>
                    <em>
                      R${" "}
                      {
                        documentProps.detalhes_financeiros.despesa_operacional
                          .gasto_fixo.valor
                      }
                    </em>
                  </div>
                  <p>
                    {
                      documentProps.detalhes_financeiros.despesa_operacional
                        .gasto_fixo.descricao
                    }
                  </p>
                </li>
                <li>
                  <div className="flex justify-between">
                    <h5 className="text-[14px] font-bold mt-2">
                      Despesas Variaveis
                    </h5>
                    <em>
                      R${" "}
                      {
                        documentProps.detalhes_financeiros.despesa_operacional
                          .gasto_variavel.valor
                      }
                    </em>
                  </div>
                  <p>
                    {
                      documentProps.detalhes_financeiros.despesa_operacional
                        .gasto_variavel.descricao
                    }
                  </p>
                </li>
                <li>
                  <div className="flex justify-between">
                    <h5 className="text-[14px] font-bold">
                      Manutencao e Investimentos
                    </h5>
                    <em>
                      R${" "}
                      {
                        documentProps.detalhes_financeiros.despesa_operacional
                          .gasto_manutencao_investimento.valor
                      }
                    </em>
                  </div>
                  <p>
                    {
                      documentProps.detalhes_financeiros.despesa_operacional
                        .gasto_manutencao_investimento.descricao
                    }
                  </p>
                </li>
              </ul>
              <div className="flex justify-between">
                <h5 className="text-[14px] font-bold">Lucro Operacional</h5>
                <em>
                  R${" "}
                  {documentProps.detalhes_financeiros.lucro_operacional.valor}{" "}
                </em>
              </div>
              <p>
                {documentProps.detalhes_financeiros.lucro_operacional.descricao}
              </p>
            </article>
            <article className="mb-5">
              <hr />
              <div className="flex justify-between">
                <h5 className="text-[14px] font-bold">Resultado Liquido</h5>
                <em>
                  R${" "}
                  {documentProps.detalhes_financeiros.resultado_liquido.valor}
                </em>
              </div>
              <p>
                {documentProps.detalhes_financeiros.resultado_liquido.descricao}
              </p>
            </article>
            <article>
              <hr />
              <h3 className="text-[14px] font-bold">Projeção Financeira</h3>
              <p>{documentProps.detalhes_financeiros.projecao_financeira}</p>
            </article>
            <hr />
            <article>
              <hr />
              <h3 className="text-[16px] font-bold mt-4">
                Informacoes Complementares
              </h3>
              <p>{documentProps.informacoes_complementares}</p>
            </article>
            <article>
              <hr />
              <h3 className="text-[16px] font-bold mt-4">
                Remuneração e Condições de Pagamento
              </h3>
              <p>
                Total a ser pago:{" "}
                <strong>
                  R${" "}
                  {documentProps.detalhes_e_condicoes_de_pagamento.valor_total}
                </strong>
                <br />
                Multa Inicial:{" "}
                <strong>
                  {
                    documentProps.detalhes_e_condicoes_de_pagamento
                      .multa_inicial
                  }
                  %
                </strong>
                <br />
                Multa Cumulativa:{" "}
                <strong>
                  {
                    documentProps.detalhes_e_condicoes_de_pagamento
                      .multa_cumulativa
                  }
                  %
                </strong>
                <br />
                Total de Parcelas:{" "}
                <strong>
                  {documentProps.detalhes_e_condicoes_de_pagamento.parcelas}
                </strong>
                <br />
                Valor de cada parcela:{" "}
                <strong>
                  R${" "}
                  {
                    documentProps.detalhes_e_condicoes_de_pagamento
                      .valor_por_parcela
                  }
                </strong>
              </p>
            </article>
            <article>
              <hr />
              <h3 className="text-[16px] font-bold text-zinc-700 mt-4">
                Disposições Finais
              </h3>
              <p className="text-zinc-700 italic">
                {documentProps.disposicoes_finais}
              </p>
            </article>
            <hr />
          </CardContent>
          <CardFooter className="flex justify-center flex-col align-end">
            <hr className="my-5 bg-zinc-600" />
            <Button
              type="button"
              variant={"destructive"}
              className="bg-red-600 hover:bg-red-700 active:bg-red-900 text-white font-bold rounded-xl"
              onClick={() => {
                deleteDocument(documentProps._id);
                closeDialog();
                setTimeout(() => {
                  fetchDocuments();
                }, 500);
              }}
            >
              Delete Document
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };

  return (
    <DocumentDialog
      triggerElement={<CardTriggerElement />}
      dialogContent={<DialogContentElement />}
      open={open}
    />
  );
};
