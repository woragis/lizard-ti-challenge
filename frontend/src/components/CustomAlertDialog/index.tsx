import { AlertDialogProps } from "@/types/components.type";
import { useCustomAlertDialogModel } from "./model";
import { CustomAlertDialogView } from "./view";

const CustomAlertDialog = ({ title, message, variant }: AlertDialogProps) => {
  const model = useCustomAlertDialogModel(title, message, variant);

  return <CustomAlertDialogView {...model} />;
};

export default CustomAlertDialog;
