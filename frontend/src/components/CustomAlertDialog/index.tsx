import { useCustomAlertDialogModel } from "./model";
import { CustomAlertDialogView } from "./view";

type CustomAlertDialogVariantType = "default" | "destructive";
interface AlertDialogProps {
  title: string;
  message: string;
  variant: CustomAlertDialogVariantType;
}
const CustomAlertDialog = ({ title, message, variant }: AlertDialogProps) => {
  const model = useCustomAlertDialogModel(title, message, variant);
  return <CustomAlertDialogView {...model} />;
};

export default CustomAlertDialog;
