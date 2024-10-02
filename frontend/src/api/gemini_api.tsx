import { geminiUri } from "@/config/api";
import axios from "axios";

// Criacao do tipo da resposta do GeminiAI
type GeminiResponseInterface = string;

// Funcao que envia uma pergunta ao GeminiAI com o id do documento perguntado
// Para que o GeminiAI envie uma resposta baseada nesse documento
export const talkToGeminiApiCall = async (_id: string, prompt: string) => {
  const body = { _id: _id, prompt: prompt };
  const response = await axios.post<GeminiResponseInterface>(
    `${geminiUri}/${_id}`,
    body,
    {}
  );
  if (response) {
    console.log(response.data);
    return response.data;
  } else return "";
};
