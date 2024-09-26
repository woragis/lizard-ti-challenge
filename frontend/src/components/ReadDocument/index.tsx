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

const ReadDocument = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="rounded-xl p-2 w-[100%] h-12">
          Document id
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-zinc-800">Document id</DialogTitle>
          <DialogDescription className="text-zinc-500"></DialogDescription>
        </DialogHeader>
        <hr />
        <div></div>
        <hr />
        <DialogFooter className="flex justify-center align-center gap-4">
          <Button
            type="button"
            variant={"destructive"}
            className="bg-red-600 hover:bg-red-700 active:bg-red-900 text-white font-bold rounded-xl"
          >
            Delete Document
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReadDocument;
