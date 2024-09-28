import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useChatModel } from "./model";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import { ChatInterface } from "@/types/gemini";

export const ChatView = ({
  chat,
  inputText,
  handleInputChange,
  submitGeminiPrompt,
}: ReturnType<typeof useChatModel>) => {
  const scrollToChatEnd = () => {
    const chatEndElement = document.getElementById("chat-end-element");
    chatEndElement?.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToChatEnd();
  }, [chat]);
  const chatComponent = chat.map(
    ({ author, message }: ChatInterface, index: number) => {
      if (author == "gemini") {
        return (
          <div className="w-[700px] mr-auto">
            <ReactMarkdown
              key={"chat_message_" + index}
              className="text-sm my-10 ml-auto p-8 bg-zinc-200 rounded-3xl ml-4 mr-auto w-[fit-content]"
            >
              {message}
            </ReactMarkdown>
          </div>
        );
      } else {
        return (
          <div className="w-[700px] ml-auto">
            <ReactMarkdown
              key={"chat_message_" + index}
              className="text-sm my-10 text-right p-8 bg-slate-400 rounded-3xl mr-4 ml-auto w-[fit-content]"
            >
              {message}
            </ReactMarkdown>
          </div>
        );
      }
    }
  );
  return (
    <div className="w-[900px] h-[600px] bg-white absolute top-[-300px] left-[-550px] p-5 rounded-3xl flex flex-col justify-between align-center">
      <h1>Talk to Gemini Ai about this document</h1>
      <hr />
      <div className="border h-[76%] w-[100%]">
        <ScrollArea className="h-[100%] overflow-scroll">
          {chatComponent}
          <div id="chat-end-element"></div>
        </ScrollArea>
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
          autoFocus
        >
          <Send />
        </Button>
      </form>
    </div>
  );
};
