import { Button } from "@/components/ui/button";
import { useHome } from "./model";
import { Container, Title } from "./styles";

export const HomeView = ({
  navigateToDocuments,
}: ReturnType<typeof useHome>) => {
  return (
    <Container>
      <Title className="text-center text-[50px] mt-[-50px] mb-[30px]">
        Esse Site foi criado <hr />
        para te ajudar a entender documentos
        <hr />
        com o <span className="font-bold text-3xl">Gemini AI</span>
      </Title>
      <ul>
        <li>Voce envia seu documento</li>
        <li>
          Nos retornamos para voce interpretacoes do seu documento com o Gemini
          AI
        </li>
      </ul>
      <div className="flex justify-center my-5">
        <Button
          onClick={navigateToDocuments}
          className="bg-zinc-800 font-bold text-white h-24 hover:bg-zinc-950"
        >
          Conversar com o Gemini AI sobre meus documentos
        </Button>
      </div>
    </Container>
  );
};
