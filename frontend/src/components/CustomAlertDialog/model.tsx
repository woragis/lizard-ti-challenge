type CustomAlertDialogVariantType = "default" | "destructive";
export const useCustomAlertDialogModel = (
  title: string,
  message: string,
  variant: CustomAlertDialogVariantType
) => {
  return {
    title,
    message,
    variant,
  };
};
