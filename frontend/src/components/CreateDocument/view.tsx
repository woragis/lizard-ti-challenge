import { Input } from "@/components/ui/input";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateDocumentModel } from "./model";

export const CreateDocumentView = ({
  handleDocumentFormChange,
  submitDocument,
  document,
}: ReturnType<typeof useCreateDocumentModel>) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          className="bg-green-500 hover:bg-green-600 active:bg-green-800 text-white font-bold rounded-xl p-2 w-[160px] h-12"
        >
          New Document
        </Button>
      </DialogTrigger>
      <form onSubmit={submitDocument}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-zinc-800">Upload Document</DialogTitle>
            <DialogDescription className="text-zinc-500">
              Save the document with our database and receive information with
              our AI
            </DialogDescription>
          </DialogHeader>
          <hr />
          <div>
            <Label
              htmlFor="document"
              className="text-zinc-800 flex justify-start align-center gap-2 p-3 pl-1"
            >
              <FileText className="text-zinc-800" />
              <p className="text-zinc-800 pb-3">Save your document</p>
            </Label>
            <Input
              className="text-zinc-800"
              type="file"
              id="document"
              accept="application/pdf"
              onChange={handleDocumentFormChange}
            />
          </div>
          <hr />
          <DialogFooter>
            <Button
              type="submit"
              variant={"outline"}
              className="w-[60%] m-auto"
              disabled={!document}
              onClick={submitDocument}
            >
              Submit Document
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
