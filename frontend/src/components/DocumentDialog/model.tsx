import { useState } from "react";

export const useDocumentDialogModel = (
  triggerElement: JSX.Element,
  dialogContent: JSX.Element,
  open: boolean
) => {
  const [innerOpen, setOpen] = useState<boolean>(false);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  return {
    open,
    innerOpen,
    openDialog,
    closeDialog,
    triggerElement,
    dialogContent,
  };
};
