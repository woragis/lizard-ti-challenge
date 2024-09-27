import styled from "styled-components";

interface DialogProps {
  open: boolean;
}
export const DialogBackground = styled.section<DialogProps>`
  transition: 300ms;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: ${(props) => (props.open ? "flex" : "none")};
  visibility: ${(props) => (props.open ? "normal" : "hidden")};
  justify-content: center;
  align-items: center;
`;

export const DialogContainer = styled.div<DialogProps>`
  transition: 300ms;
  display: ${(props) => (props.open ? "block" : "none")};
  visibility: ${(props) => (props.open ? "normal" : "hidden")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  border: none;
  outline: none;
`;
