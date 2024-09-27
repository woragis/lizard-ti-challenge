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
  deleteDocument,
}: ReturnType<typeof useDocumentModel>) => {
  const CardTriggerElement = () => {
    return (
      <Card className="hover:cursor-pointer mt-4">
        <CardHeader>
          <CardTitle className="font-normal">
            Documento da Empresa:{" "}
            <strong>{documentProps.empresa_contratante.razao_social}</strong>{" "}
            com{" "}
            <strong>{documentProps.empresa_contratante.razao_social}</strong>
          </CardTitle>
          <CardDescription>
            {documentProps.data_do_documento}
            <small className="text-zinc-300">
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
        <Card className="absolute right-[-420px] h-[500px] top-[-250px] w-[500px] bg-white">
          <CardHeader>
            <CardTitle>Document {documentProps._id}</CardTitle>
            <CardDescription>
              Informações acerca do contrato entre a empresa{" "}
              {documentProps.empresa_contratante.razao_social} e{" "}
              {documentProps.empresa_contratante.razao_social}
              <br />
              Contrato que vai de{" "}
              {documentProps.objeto_do_contrato.data_inicial}
              ate {documentProps.objeto_do_contrato.data_final}
            </CardDescription>
          </CardHeader>
          <hr />
          <CardContent className="h-64 text-sm overflow-y-scroll">
            <h3>Obrigações do Contrato:</h3>
            {documentProps.obrigacoes_da_empresa_contratada}
            <br />
            <article className="mb-5">
              <h3>Detalhes Financeiros:</h3>
              <div className="flex gap-7">
                <h4>Receita Operacional Bruta:</h4>
                <em>
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
            <article className="mb-5">
              <h4>Despesas Operacionais</h4>
              <ul>
                <li>
                  <h5>Despesas Fixas</h5>
                  <em>
                    {
                      documentProps.detalhes_financeiros.despesa_operacional
                        .gasto_fixo.valor
                    }
                  </em>
                  <p>
                    {
                      documentProps.detalhes_financeiros.despesa_operacional
                        .gasto_fixo.descricao
                    }
                  </p>
                </li>
                <li>
                  <h5>Despesas Variaveis</h5>
                  <em>
                    {
                      documentProps.detalhes_financeiros.despesa_operacional
                        .gasto_variavel.valor
                    }
                  </em>
                  <p>
                    {
                      documentProps.detalhes_financeiros.despesa_operacional
                        .gasto_variavel.descricao
                    }
                  </p>
                </li>
                <li>
                  <h5>Manutencao e Investimentos</h5>
                  <em>
                    {
                      documentProps.detalhes_financeiros.despesa_operacional
                        .gasto_manutencao_investimento.valor
                    }
                  </em>
                  <p>
                    {
                      documentProps.detalhes_financeiros.despesa_operacional
                        .gasto_manutencao_investimento.descricao
                    }
                  </p>
                </li>
              </ul>
            </article>
            <article className="mb-5">
              <div className="flex gap-5">
                <h3>Lucro Operacional </h3>
                <em>
                  {documentProps.detalhes_financeiros.lucro_operacional.valor} |{" "}
                  {
                    documentProps.detalhes_financeiros.lucro_operacional
                      .porcentagem_relativa
                  }
                </em>
              </div>
              <p>
                {documentProps.detalhes_financeiros.lucro_operacional.descricao}
              </p>
            </article>
            <article className="mb-5">
              <div className="flex gap-5">
                <h3>Resultado Liquido</h3>
                <em>
                  {documentProps.detalhes_financeiros.resultado_liquido.valor}
                </em>
              </div>
              <p>
                {documentProps.detalhes_financeiros.resultado_liquido.descricao}
              </p>
            </article>
            <article className="mb-5">
              <h3>Projeção Financeira</h3>
              <p>{documentProps.detalhes_financeiros.projecao_financeira}</p>
            </article>
            <hr />
            <article>
              <h3>Informacoes Complementares</h3>
              <p>{documentProps.informacoes_complementares}</p>
            </article>
            <article>
              <h3>Remuneração e Condições de Pagamento</h3>
              <p>
                Total a ser pago:{" "}
                <strong>
                  {documentProps.detalhes_e_condicoes_de_pagamento.valor_total}
                </strong>
                <br />
                Multa Inicial:{" "}
                <strong>
                  {
                    documentProps.detalhes_e_condicoes_de_pagamento
                      .multa_inicial
                  }
                </strong>
                <br />
                Multa Cumulativa:{" "}
                <strong>
                  {
                    documentProps.detalhes_e_condicoes_de_pagamento
                      .multa_cumulativa
                  }
                </strong>
                <br />
                Total de Parcelas:{" "}
                <strong>
                  {documentProps.detalhes_e_condicoes_de_pagamento.parcelas}
                </strong>
                <br />
                Valor de cada parcela:{" "}
                <strong>
                  {
                    documentProps.detalhes_e_condicoes_de_pagamento
                      .valor_por_parcela
                  }
                </strong>
              </p>
            </article>
            <article>
              <h3>Disposições Finais</h3>
              <p>{documentProps.disposicoes_finais}</p>
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
