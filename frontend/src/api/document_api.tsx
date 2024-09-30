import { documentsUri } from "@/config/api";
import { DocumentInterface } from "@/types/document";
import axios from "axios";

export const fetchDocumentsApiCall = async () => {
  const response = await axios.get<DocumentInterface[]>(documentsUri);
  console.log(response);
  return response.data;
};

export const createDocumentApiCall = async (document: File) => {
  const formData = new FormData();
  formData.append("file", document, "document_1");
  const response = await axios.post(documentsUri, formData);
  return response.data;
};

export const deleteDocumentApiCall = async (_id: DocumentInterface["_id"]) => {
  const deleteDocumentUri = `${documentsUri}/${_id}`;
  const response = await axios.delete(deleteDocumentUri);
  return response.data;
};
