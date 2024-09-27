import ReadDocument from "@/components/ReadDocument";
import { useDocumentsModel } from "./model";
import CreateDocument from "@/components/CreateDocument";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocumentInterface } from "@/types/document";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";

export const DocumentsView = ({
  data,
  loading,
  fetchDocuments,
}: ReturnType<typeof useDocumentsModel>) => {
  const documents = data.map(
    ({
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
      return (
        <>
          <div key={_id}>
            <ReadDocument
              key={_id}
              _id={_id}
              empresa_contratante={contracting_company}
              empresa_contratada={contracted_company}
              objeto_do_contrato={objeto_do_contrato}
              obrigacoes_da_empresa_contratada={obligations}
              detalhes_financeiros={financial_details}
              informacoes_complementares={complementary_information}
              detalhes_e_condicoes_de_pagamento={payment_details}
              disposicoes_finais={disposicoes_finais}
              data_do_documento={document_date}
            />
            <Separator className="mt-4" />
          </div>
        </>
      );
    }
  );

  return (
    <main className="p-12">
      <aside className="absolute right-10 top-20">
        <CreateDocument />
      </aside>
      <ScrollArea className="mh-[400px] h-[70vh] w-[500px] m-auto rounded-xl border p-4">
        <div className="flex justify-between align-center p-2">
          <h4>Saved Documents</h4>
          <Button
            variant={"default"}
            size={"icon"}
            onClick={() => fetchDocuments()}
          >
            <ReloadIcon />
          </Button>
        </div>
        <hr className="my-5" />
        {loading && <>Loading</>}
        {data && documents}
      </ScrollArea>
    </main>
  );
};
