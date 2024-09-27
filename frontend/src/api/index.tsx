import {
  CreateDocumentInterface,
  DeleteDocumentInterface,
  GetDocumentsInterface,
} from "@/types/api";
import { DocumentInterface } from "@/types/document";
import axios from "axios";

export const fetchDocumentsApiCall = async () => {
  const backendUri = "http://localhost:8000/documents";
  const response = await fetch(backendUri, {
    method: "GET",
  });
  const data: GetDocumentsInterface = await response.json();
  console.log("Fetch - Status Code", response.status);
  console.log("Fetch - data:", data);
  return data;
};

export const createDocumentApiCall = async (document: File) => {
  const formData = new FormData();
  formData.append("file", document, "document_1");
  try {
    const backendUri = "http://localhost:8000/documents";
    axios
      .post(backendUri, formData)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log("Error sending file to backend");
  }
};

export const deleteDocumentApiCall = async (_id: DocumentInterface["_id"]) => {
  const backendUri = `http://localhost:8000/documents/${_id}`;
  const response = await fetch(backendUri, {
    method: "DELETE",
  });
  const data: DeleteDocumentInterface = await response.json();
  return data;
};
