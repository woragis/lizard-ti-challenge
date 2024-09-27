import { useChatModel } from "./model";
import { ChatView } from "./view";

interface ChatProps {
  _id: string;
}
const Chat = ({ _id }: ChatProps) => {
  const model = useChatModel(_id);
  return <ChatView {...model} />;
};

export default Chat;
