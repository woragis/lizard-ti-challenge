import * as styled from "./styles";
import { useHome } from "./model";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HomeView = (props: ReturnType<typeof useHome>) => {
  return (
    <>
      <Alert variant="default" className="">
        <RocketIcon className="h-6 w-6" />
        <AlertTitle>File Sent</AlertTitle>
        <AlertDescription>File received by the server</AlertDescription>
      </Alert>
      <styled.Container>
        <styled.Title>Cadastre seus produtos aqui</styled.Title>
        <styled.FormContainer>
          <styled.Form className="bg-zinc-900">
            <h1 className="text-white">Talk to Gemini AI about your files</h1>
            <label htmlFor="chat">Send msesages</label>
            <Input type="text" id="chat" name="chat" />
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Send />
            </Button>
          </styled.Form>
        </styled.FormContainer>
        <hr />
      </styled.Container>
    </>
  );
};
