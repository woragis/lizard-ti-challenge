import { CustomAlertDialogVariantType } from "@/types/components.type";

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
