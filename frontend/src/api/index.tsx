import {
  CreateDocumentInterface,
  DeleteDocumentInterface,
  GetDocumentsInterface,
} from "@/types/api";
import { DocumentInterface } from "@/types/document";

export const fetchDocumentsApiCall = async () => {
  const backendUri = "http://localhost:8000/documents";
  const response = await fetch(backendUri, {
    method: "GET",
  });
  const data: GetDocumentsInterface = await response.json();
  return data;
};

export const createDocumentApiCall = async (document: DocumentInterface) => {
  const backendUri = "http://localhost:8000/documents";
  const response = await fetch(backendUri, {
    method: "POST",
    body: JSON.stringify(document),
    headers: {
      "Content-Type": "application/pdf",
    },
  });
  const data: CreateDocumentInterface = await response.json();
  return data;
};

export const deleteDocumentApiCall = async (
  document_id: DocumentInterface["_id"]
) => {
  const backendUri = `http://localhost:8000/documents/${document_id}`;
  const response = await fetch(backendUri, {
    method: "DELETE",
  });
  const data: DeleteDocumentInterface = await response.json();
  return data;
};
