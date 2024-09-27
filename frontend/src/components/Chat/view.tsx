import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useChatModel } from "./model";

export const ChatView = ({
  chat,
  inputText,
  handleInputChange,
  submitGeminiPrompt,
}: ReturnType<typeof useChatModel>) => {
  const chatComponent = chat.map((text: any) => {
    return <p className="">{text}</p>;
  });
  return (
    <div className="w-[500px] h-96 bg-red-500 absolute top-0 left-[-600px] p-5 rounded-3xl flex flex-col justify-between align-center">
      <h1>Talk to Gemini Ai about this document</h1>
      <hr />
      <div className="border h-64 w-[100%]">
        <ul>{chatComponent}</ul>
      </div>
      <form className="flex">
        <Input
          placeholder="talk to Gemini about this document"
          className="rounded-3xl"
          value={inputText}
          onChange={handleInputChange}
        />
        <Button
          size={"icon"}
          variant={"secondary"}
          onClick={submitGeminiPrompt}
        >
          <Send />
        </Button>
      </form>
    </div>
  );
};
