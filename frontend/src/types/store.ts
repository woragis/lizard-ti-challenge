import { Dispatch, SetStateAction } from "react";
import { DocumentInterface } from "./document";
import { ChatInterface } from "./gemini";

type requestTypes = Promise<200 | 201 | 500>;

export interface AlertMessageInterface {
  title: string;
  message: string;
}

export interface ContextInterface {
  data: DocumentInterface[];
  response: AlertMessageInterface | null;
  loading: boolean;
  error: AlertMessageInterface | null;
  talkToGemini: (_id: string, prompt: string) => {};
  fetchDocuments: () => requestTypes;
  createDocument: (document: File) => requestTypes;
  deleteDocument: (_id: DocumentInterface["_id"]) => requestTypes;
  chat: ChatInterface[];
  setChat: Dispatch<SetStateAction<ChatInterface[]>>;
  chatLoading: boolean;
}
