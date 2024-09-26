import { DocumentInterface } from "./document";

export interface GetDocumentsInterface extends Response {
  data: DocumentInterface[];
}

export interface CreateDocumentInterface extends Response {}

export interface DeleteDocumentInterface extends Response {}

export interface Response {
  message: string;
}
