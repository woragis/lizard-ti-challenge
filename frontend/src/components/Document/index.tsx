import { DocumentInterface } from "@/types/document";
import { useDocumentModel } from "./model";
import { DocumentView } from "./view";

const Document = (documentProps: DocumentInterface) => {
  const model = useDocumentModel(documentProps);

  return <DocumentView {...model} />;
};

export default Document;
