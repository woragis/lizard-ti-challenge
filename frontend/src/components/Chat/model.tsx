import { useMyContext } from "@/store";
import { ChangeEvent, useState } from "react";

export const useChatModel = (_id: string) => {
  const { deleteDocument, talkToGemini, chat } = useMyContext();
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  const submitGeminiPrompt = async (event: any) => {
    event.preventDefault();
    talkToGemini(_id, inputText);
    setInputText("");
  };

  return {
    chat,
    deleteDocument,
    handleInputChange,
    submitGeminiPrompt,
    inputText,
  };
};
