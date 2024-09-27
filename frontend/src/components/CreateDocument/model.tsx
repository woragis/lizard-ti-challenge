import { ChangeEvent, useState } from "react";
import { useMyContext } from "@/store";

export const useCreateDocumentModel = () => {
  const { createDocument } = useMyContext();
  const [document, setDocument] = useState<File | null>(null);
  const handleDocumentFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setDocument(event.target.files[0]);
    }
  };
  const submitDocument = async (event: any) => {
    event.preventDefault();
    if (!document) {
      alert("Please select a file first!");
      return;
    }
    await createDocument(document);
    setDocument(null);
  };

  return { handleDocumentFormChange, submitDocument, document };
};
