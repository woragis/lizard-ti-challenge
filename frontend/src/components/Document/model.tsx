import { useMyContext } from "@/store";
import { DocumentInterface } from "@/types/document";

export const useDocumentModel = (documentProps: DocumentInterface) => {
  const { deleteDocument } = useMyContext();
  return {
    documentProps,
    deleteDocument,
  };
};
