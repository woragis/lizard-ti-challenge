type AlertDialogVariantType = "default" | "destructive";
export const useAlertDialogModel = (
  title: string,
  message: string,
  variant: AlertDialogVariantType
) => {
  return {
    title,
    message,
    variant,
  };
};
