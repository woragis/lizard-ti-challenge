import { documentsUri } from "@/config/api";
import { DocumentInterface } from "@/types/document";
import axios from "axios";

// Funcao que recebe os documentos salvos no banco de dados
export const fetchDocumentsApiCall = async () => {
  const response = await axios.get<DocumentInterface[]>(documentsUri);
  return response.data;
};

// Funcao que envia o documento para que seja salvo no banco de dados
export const createDocumentApiCall = async (document: File) => {
  const formData = new FormData();
  formData.append("file", document, "document_1");
  const response = await axios.post(documentsUri, formData);
  return response.data;
};

// Funcao de deletar documento do banco de dados
export const deleteDocumentApiCall = async (_id: DocumentInterface["_id"]) => {
  const deleteDocumentUri = `${documentsUri}/${_id}`;
  const response = await axios.delete(deleteDocumentUri);
  return response.data;
};
