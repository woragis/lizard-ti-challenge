import { useAlertDialogModel } from "./model";
import { AlertDialogView } from "./view";

type AlertDialogVariantType = "default" | "destructive";
interface AlertDialogProps {
  title: string;
  message: string;
  variant: AlertDialogVariantType;
}
const AlertDialog = ({ title, message, variant }: AlertDialogProps) => {
  const model = useAlertDialogModel(title, message, variant);
  return <AlertDialogView {...model} />;
};

export default AlertDialog;
