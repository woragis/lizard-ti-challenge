import { DocumentInterface } from "@/types/document";
import { useDocumentsModel } from "./model";
import CreateDocument from "@/components/CreateDocument";
import Document from "@/components/Document";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

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
          <Document
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
        </>
      );
    }
  );
  return (
    <main className="p-24">
      <aside className="absolute right-10 top-20">
        <CreateDocument />
      </aside>
      <div className="">
        <header>
          <div className="flex justify-between">
            <h1 className="text-3xl">Documents</h1>
            <Button
              size={"icon"}
              variant={"default"}
              onClick={fetchDocuments}
              className="w-[40px] h-[40px]"
            >
              <ReloadIcon className="w-[36px] h-[36px] font-bold" />
            </Button>
          </div>
          <hr className="my-4" />
          <ScrollArea>
            {loading && <>Loading</>}
            {!loading && data && documents}
          </ScrollArea>
        </header>
      </div>
    </main>
  );
};
