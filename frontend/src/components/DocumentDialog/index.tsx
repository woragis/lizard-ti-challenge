import { useDocumentDialogModel } from "./model";
import { DocumentDialogView } from "./view";

interface DocumentDialogProps {
  triggerElement: JSX.Element;
  dialogContent: JSX.Element;
  open: boolean;
}

const DocumentDialog = ({
  triggerElement,
  dialogContent,
  open,
}: DocumentDialogProps) => {
  const model = useDocumentDialogModel(triggerElement, dialogContent, open);
  return <DocumentDialogView {...model} />;
};

export default DocumentDialog;
