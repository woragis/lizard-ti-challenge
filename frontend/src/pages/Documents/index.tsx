import CreateDocument from "@/components/CreateDocument";
import ReadDocument from "@/components/ReadDocument";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
// import { useData } from "@/store";

const Documents = () => {
  // const { data, loading } = useData();
  const documents = [1, 2, 3, 4, 5].map(() => {
    return (
      <>
        <div>
          <ReadDocument />
          <Separator className="mt-4" />
        </div>
      </>
    );
  });

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
