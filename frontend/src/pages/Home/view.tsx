import { useHome } from "./model";
import { Container, Title } from "./styles";

export const HomeView = ({ data }: ReturnType<typeof useHome>) => {
  return (
    <Container>
      <Title>
        Esse Site foi criado com o intuito de te ajudar a entender documents com
        o Gemini AI
      </Title>
      <ul>
        <li>Voce envia seu documento</li>
        <li>
          Nos retornamos para voce interpretacoes do seu documento com o Gemini
          AI
        </li>
      </ul>
      {data && <>Hi</>}
    </Container>
  );
};
