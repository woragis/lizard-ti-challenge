import { geminiUri } from "@/config/api";
import axios from "axios";

export const talkToGeminiApiCall = async (_id: string, prompt: string) => {
  // const formData = JSON.stringify({ _id: _id, prompt: prompt });
  const formData = new FormData();
  formData.append("_id", _id);
  formData.append("prompt", prompt);
  try {
    axios
      .post(geminiUri, formData, {})
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log("Error occurred during gemini talk post request");
  }
};
