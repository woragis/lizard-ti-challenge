import { useMyContext } from "@/store";
import { DocumentInterface } from "@/types/document";
import { ChangeEvent, useState } from "react";

export const useDocumentModel = (documentProps: DocumentInterface) => {
  const { deleteDocument, talkToGemini, chat } = useMyContext();
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };
  const submitGeminiPrompt = async (event: any) => {
    event.preventDefault();
    talkToGemini(documentProps._id, inputText);
    setInputText("");
  };

  return {
    chat,
    deleteDocument,
    talkToGemini,
    handleInputChange,
    submitGeminiPrompt,
    documentProps,
    inputText,
  };
};
