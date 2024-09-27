import { RocketIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useAlertDialogModel } from "./model";

export const AlertDialogView = ({
  title,
  message,
  variant,
}: ReturnType<typeof useAlertDialogModel>) => {
  return (
    <Alert variant={variant} className="w-64 m-10">
      <RocketIcon className="h-6 w-6" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
