import { RocketIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useCustomAlertDialogModel } from "./model";

export const CustomAlertDialogView = ({
  title,
  message,
  variant,
}: ReturnType<typeof useCustomAlertDialogModel>) => {
  return (
    <Alert
      variant={variant}
      className="w-64 m-10 fixed top-[-30px] left-4 bg-white border z-30"
    >
      <RocketIcon className="h-6 w-6" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
