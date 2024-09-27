import { DocumentInterface } from "./document";

export type GetDocumentsInterface = DocumentInterface[];
export type CreateDocumentInterface = string;
export type DeleteDocumentInterface = string;
export type Response = string;

/*
export interface CreateDocumentInterface extends Response {}
export interface DeleteDocumentInterface extends Response {}
export interface Response {
  message: string;
}
*/
