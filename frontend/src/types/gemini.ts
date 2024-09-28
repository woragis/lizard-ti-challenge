type ChatAuthors = "user" | "gemini";

export interface ChatInterface {
  author: ChatAuthors;
  message: string;
}
