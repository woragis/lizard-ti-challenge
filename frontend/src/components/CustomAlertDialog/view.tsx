import { Frown, RocketIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useCustomAlertDialogModel } from "./model";

export const CustomAlertDialogView = ({
  title,
  message,
  variant,
}: ReturnType<typeof useCustomAlertDialogModel>) => {
  if (variant === "default") {
    return (
      <Alert
        variant={variant}
        className="w-[350px] m-10 fixed top-[-30px] left-4 bg-white border z-30 text-green-600"
      >
        <RocketIcon className="h-6 w-6" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  } else {
    return (
      <Alert
        variant={variant}
        className="w-[350px] m-10 fixed top-[-30px] left-4 bg-white border z-30 text-red-600"
      >
        <Frown className="h-6 w-6" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  }
};
