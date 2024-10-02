export interface ChatProps {
  _id: string;
}

export type CustomAlertDialogVariantType = "default" | "destructive";

export interface AlertDialogProps {
  title: string;
  message: string;
  variant: CustomAlertDialogVariantType;
}

export interface DocumentDialogProps {
  triggerElement: JSX.Element;
  dialogContent: JSX.Element;
  open: boolean;
}

export interface DialogProps {
  open: boolean;
}
