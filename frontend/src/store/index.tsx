import {
  createDocumentApiCall,
  deleteDocumentApiCall,
  fetchDocumentsApiCall,
  talkToGeminiApiCall,
} from "@/api";
import { Response } from "@/types/api";
import { DocumentInterface } from "@/types/document";
import {
  FC,
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";

type requestTypes = Promise<200 | 201 | 500>;
interface ContextInterface {
  data: DocumentInterface[];
  response: Response;
  loading: boolean;
  error: string | null;
  talkToGemini: (_id: string, prompt: string) => {};
  fetchDocuments: () => requestTypes;
  createDocument: (document: File) => requestTypes;
  deleteDocument: (_id: DocumentInterface["_id"]) => requestTypes;
  chat: string[];
  chatLoading: boolean;
}

const MyContext = createContext<ContextInterface>({} as ContextInterface);

const MyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DocumentInterface[]>([]);
  const [response, setResponse] = useState<Response>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [chatLoading, setChatLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [chat, setChat] = useState<any>(null);

  const talkToGemini = async (_id: string, prompt: string) => {
    setChatLoading(true);
    setError(null);
    try {
      const geminiResponse = await talkToGeminiApiCall(_id, prompt);
      setChat(geminiResponse);
    } catch (err) {
      setError("Error receiving gemini response");
    } finally {
      setChatLoading(false);
    }
  };

  const fetchDocuments = async () => {
    setLoading(true);
    setError(null);
    try {
      const getDocumentsResponse = await fetchDocumentsApiCall();
      setData(getDocumentsResponse);
      setResponse("products fetched");
    } catch (err) {
      setError("Failed to fetch documents");
      return 500;
    } finally {
      setLoading(false);
      return 200;
    }
  };

  const createDocument = async (document: File) => {
    setLoading(true);
    setError(null);
    try {
      await createDocumentApiCall(document);
    } catch (err) {
      setError("Failed to save document");
      return 500;
    } finally {
      setResponse("Successfully created document");
      setLoading(false);
      return 201;
    }
  };

  const deleteDocument = async (document_id: DocumentInterface["_id"]) => {
    setLoading(true);
    setError(null);
    try {
      const data = await deleteDocumentApiCall(document_id);
      setResponse(data);
    } catch (err) {
      setError("Failed to delete document");
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
