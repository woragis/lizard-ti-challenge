import { DocumentDialogProps } from "@/types/components.type";
import { useDocumentDialogModel } from "./model";
import { DocumentDialogView } from "./view";

const DocumentDialog = ({
  triggerElement,
  dialogContent,
  open,
}: DocumentDialogProps) => {
  const model = useDocumentDialogModel(triggerElement, dialogContent, open);

  return <DocumentDialogView {...model} />;
};

export default DocumentDialog;
