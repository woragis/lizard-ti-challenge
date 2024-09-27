import { useDocumentsModel } from "./model";
import { DocumentsView } from "./view";

const Documents = () => {
  const model = useDocumentsModel();

  return <DocumentsView {...model} />;
};

export default Documents;
