import { CreateDocumentView } from "./view";
import { useCreateDocumentModel } from "./model";

const CreateDocument = () => {
  const model = useCreateDocumentModel();
  return <CreateDocumentView {...model} />;
};

export default CreateDocument;
