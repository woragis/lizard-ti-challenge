import {
  createDocumentApiCall,
  deleteDocumentApiCall,
  fetchDocumentsApiCall,
  talkToGeminiApiCall,
} from "@/api";
import { DocumentInterface } from "@/types/document";
import { ChatInterface } from "@/types/gemini";
import { AlertMessageInterface, ContextInterface } from "@/types/store";
import {
  FC,
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";

const MyContext = createContext<ContextInterface>({} as ContextInterface);

const MyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DocumentInterface[]>([]);
  const [response, setResponse] = useState<AlertMessageInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [chatLoading, setChatLoading] = useState<boolean>(true);
  const [error, setError] = useState<AlertMessageInterface | null>(null);
  const [chat, setChat] = useState<ChatInterface[]>([]);
  const alertTime = 5000;

  const receiveResponse = (response: AlertMessageInterface) => {
    setResponse(null);
    setResponse(response);
    setTimeout(() => {
      setResponse(null);
    }, alertTime);
  };
  const receiveError = (response: AlertMessageInterface) => {
    setError(null);
    setError(response);
    setTimeout(() => {
      setError(null);
    }, alertTime);
  };
  const talkToGemini = async (_id: string, prompt: string) => {
    setChatLoading(true);
    if (chat.length === 0) {
      const firstPrompt = "\n\nDito isso me fale sobre esse arquivo";
      setChat((prevState) => [
        ...prevState,
        { author: "user", message: prompt + firstPrompt },
      ]);
    } else {
      setChat((prevState) => [
        ...prevState,
        { author: "user", message: prompt },
      ]);
    }
    const errorGeminiAiMessage =
      "Oops, estamos com problemas para gerar sua resposta";
    const responseMessage: AlertMessageInterface = {
      title: "Sucesso",
      message: "Documentos foram recebidos com sucesso",
    };
    let errorMessage: AlertMessageInterface = {
      title: "Erro no Chat do Gemini AI",
      message: "Encontramos um erro ao tentar se comunicar com o Gemini AI",
    };
    try {
      const geminiResponse = await talkToGeminiApiCall(_id, prompt);
      if (geminiResponse) {
        setChat((prevState) => [
          ...prevState,
          { author: "gemini", message: geminiResponse },
        ]);
      } else
        setChat((prevState) => [
          ...prevState,
          { author: "gemini", message: errorGeminiAiMessage },
        ]);
      receiveResponse(responseMessage);
    } catch (err) {
      setChat((prevState) => [
        ...prevState,
        { author: "gemini", message: errorGeminiAiMessage },
      ]);
      receiveError(errorMessage);
    } finally {
      setChatLoading(false);
    }
  };

  const fetchDocuments = async () => {
    setLoading(true);
    const responseMessage: AlertMessageInterface = {
      title: "Sucesso",
      message: "Documentos foram recebidos com sucesso",
    };
    const errorMessage: AlertMessageInterface = {
      title: "Erro ao receber documentos",
      message:
        "Nos encontramos um erro enquanto tentavamos receber os documentos",
    };
    try {
      const documents = await fetchDocumentsApiCall();
      if (documents) {
        setData(documents);
        receiveResponse(responseMessage);
      } else {
        setData([]);
        receiveError(errorMessage);
      }
    } catch (err) {
      receiveError(errorMessage);
      return 500;
    } finally {
      setLoading(false);
      return 200;
    }
  };

  const createDocument = async (document: File) => {
    setLoading(true);
    const responseMessage: AlertMessageInterface = {
      title: "Sucesso",
      message: "Seu documento foi criado com sucesso",
    };
    const errorMessage: AlertMessageInterface = {
      title: "Erro ao enviar seu documento",
      message:
        "Nos nos deparamos com um erro enquanto tentavamos salvar seu documento",
    };
    try {
      await createDocumentApiCall(document);
      receiveResponse(responseMessage);
    } catch (err) {
      receiveError(errorMessage);
      return 500;
    } finally {
      setLoading(false);
      return 201;
    }
  };

  const deleteDocument = async (document_id: DocumentInterface["_id"]) => {
    setLoading(true);
    const responseMessage: AlertMessageInterface = {
      title: "Sucesso",
      message: "Seu documento foi deletado com sucesso",
    };
    const errorMessage: AlertMessageInterface = {
      title: "Erro ao deletar seu arquivo",
      message: "Nós nos deparamos com um erro ao tentar deletar seu documento",
    };
    try {
      await deleteDocumentApiCall(document_id);
      receiveResponse(responseMessage);
    } catch (err) {
      receiveError(errorMessage);
      return 500;
    } finally {
      setLoading(false);
      return 200;
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);
  return (
    <MyContext.Provider
      value={{
        data,
        setChat,
        response,
        error,
        loading,
        talkToGemini,
        fetchDocuments,
        createDocument,
        deleteDocument,
        chat,
        chatLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { useMyContext, MyProvider };
