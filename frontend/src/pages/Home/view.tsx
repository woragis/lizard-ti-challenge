import * as styled from "./styles";
import { useHome } from "./model";

export const HomeView = (props: ReturnType<typeof useHome>) => {
  return (
    <styled.Container>
      <styled.Title>Cadastre seus produtos aqui</styled.Title>
    </styled.Container>
  );
};
