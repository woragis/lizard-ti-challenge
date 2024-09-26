import CreateDocument from "@/components/CreateDocument";
import ReadDocument from "@/components/ReadDocument";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { DocumentInterface } from "@/types/document";
// import { useData } from "@/store";

const Documents = () => {
  // const { data, loading } = useData();
  const mockData: DocumentInterface[] = [
    {
      _id: "1",
      contracting_company: {
        corporate_name: "Blaze",
        address: "",
        cnpj: "",
      },
      contracted_company: {
        corporate_name: "Betway",
        address: "",
        cnpj: "",
      },
    },
    {
      _id: "2",
      contracting_company: {
        corporate_name: "Betway",
        address: "",
        cnpj: "",
      },
      contracted_company: {
        corporate_name: "Sao Paulo",
        address: "",
        cnpj: "",
      },
    },
    {
      _id: "3",
      contracting_company: {
        corporate_name: "Joaozinho",
        address: "",
        cnpj: "",
      },
      contracted_company: {
        corporate_name: "Betway",
        address: "",
        cnpj: "",
      },
    },
  ];
  const documents = mockData.map(
    ({
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
      return (
        <>
          <div key={_id}>
            <ReadDocument
              key={_id}
              _id={_id}
              contracting_company={contracting_company}
              contracted_company={contracted_company}
              objeto_do_contrato={objeto_do_contrato}
              obligations={obligations}
              financial_details={financial_details}
              complementary_information={complementary_information}
              payment_details={payment_details}
              disposicoes_finais={disposicoes_finais}
              document_date={document_date}
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
      <ScrollArea className="h-96 w-[500px] m-auto rounded-xl border p-4">
        <h4>Saved Documents</h4>
        <hr className="my-5" />
        {documents}
      </ScrollArea>
    </main>
  );
};

export default Documents;
