import { useDocumentDialogModel } from "./model";
import { DialogBackground, DialogContainer } from "./styles";

export const DocumentDialogView = ({
  open,
  innerOpen,
  openDialog,
  closeDialog,
  triggerElement,
  dialogContent,
}: ReturnType<typeof useDocumentDialogModel>) => {
  return (
    <div>
      <article onClick={openDialog}>{triggerElement}</article>
      <DialogBackground
        open={open && innerOpen}
        onClick={closeDialog}
      ></DialogBackground>
      <DialogContainer open={open && innerOpen}>
        {dialogContent}
      </DialogContainer>
    </div>
  );
};
