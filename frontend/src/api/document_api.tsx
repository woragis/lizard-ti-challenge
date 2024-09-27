import { documentsUri } from "@/config/api";
import { DocumentInterface } from "@/types/document";
import axios from "axios";

export const fetchDocumentsApiCall = async () => {
  axios
    .get(documentsUri)
    .then((response) => {
      console.log(`Get Documents status code: ${response.status}`);
      return response.data;
    })
    .catch((err) => {
      console.log("Error retrieving documents");
      console.log(err);
    });
};

export const createDocumentApiCall = async (document: File) => {
  const formData = new FormData();
  formData.append("file", document, "document_1");
  axios
    .post(documentsUri, formData)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("Error sending file to backend");
      console.log(err);
    });
};

export const deleteDocumentApiCall = async (_id: DocumentInterface["_id"]) => {
  const deleteDocumentUri = `${documentsUri}/${_id}`;
  axios
    .delete(deleteDocumentUri)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("Error deleting file");
      console.log(err);
    });
};
