import { useMyContext } from "@/store";
import { DocumentInterface } from "@/types/document";
import { useState } from "react";

export const useDocumentModel = (documentProps: DocumentInterface) => {
  const [open, setOpen] = useState<boolean>(true);
  const { deleteDocument } = useMyContext();
  const openDialog = () => {
    setOpen(false);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  return {
    documentProps,
    deleteDocument,
    open,
    openDialog,
    closeDialog,
  };
};
