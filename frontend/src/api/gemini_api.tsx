import { geminiUri } from "@/config/api";
import axios from "axios";

type GeminiResponseInterface = string;
export const talkToGeminiApiCall = async (_id: string, prompt: string) => {
  // const formData = JSON.stringify({ _id: _id, prompt: prompt });
  const formData = new FormData();
  formData.append("_id", _id);
  formData.append("prompt", prompt);
  try {
    const response = await axios.post<GeminiResponseInterface>(
      geminiUri,
      formData,
      {}
    );
    if (response) return response.data;
    else return [];
  } catch (err) {
    console.log("Error occurred during gemini talk post request");
  }
};
