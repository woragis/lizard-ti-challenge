import { ChatProps } from "@/types/components.type";
import { useChatModel } from "./model";
import { ChatView } from "./view";

const Chat = ({ _id }: ChatProps) => {
  const model = useChatModel(_id);

  return <ChatView {...model} />;
};

export default Chat;
