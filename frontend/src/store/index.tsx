import {
  createDocumentApiCall,
  deleteDocumentApiCall,
  fetchDocumentsApiCall,
  talkToGeminiApiCall,
} from "@/api";
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
interface AlertMessageInterface {
  title: string;
  message: string;
}

interface ContextInterface {
  data: DocumentInterface[];
  response: AlertMessageInterface | null;
  loading: boolean;
  error: AlertMessageInterface | null;
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
  const [response, setResponse] = useState<AlertMessageInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [chatLoading, setChatLoading] = useState<boolean>(true);
  const [error, setError] = useState<AlertMessageInterface | null>(null);
  const [chat, setChat] = useState<string[]>([""]);
  const alertTime = 5000;

  const talkToGemini = async (_id: string, prompt: string) => {
    setChatLoading(true);
    setError(null);
    try {
      const geminiResponse = await talkToGeminiApiCall(_id, prompt);
      if (geminiResponse) setChat([...chat, ""]);
      else setChat([]);
    } catch (err) {
      let error: AlertMessageInterface = { title: "", message: "" };
      setError(error);
    } finally {
      setChatLoading(false);
    }
  };

  const fetchDocuments = async () => {
    setLoading(true);
    setError(null);
    try {
      const documents = await fetchDocumentsApiCall();
      if (documents) setData(documents);
      else setData([]);
      const response: AlertMessageInterface = {
        title: "Success",
        message: "Documents were fetched successfully",
      };
      setResponse(response);
      setTimeout(() => {
        setResponse(null);
      }, alertTime);
    } catch (err) {
      const error: AlertMessageInterface = {
        title: "Error fetching Products",
        message:
          "We encountered a error while fetching products in the backend",
      };
      setError(error);
      setTimeout(() => {
        setError(null);
      }, alertTime);
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
      const responseMessage: AlertMessageInterface = {
        title: "Success",
        message: "Your document was successfully created",
      };
      setResponse(responseMessage);
      setTimeout(() => {
        setResponse(null);
      }, alertTime);
    } catch (err) {
      const errorMessage: AlertMessageInterface = {
        title: "Error Uploading Document",
        message:
          "We encountered a error while uploading your document to the backend",
      };
      setError(errorMessage);
      setTimeout(() => {
        setError(null);
      }, alertTime);
      return 500;
    } finally {
      setLoading(false);
      return 201;
    }
  };

  const deleteDocument = async (document_id: DocumentInterface["_id"]) => {
    setLoading(true);
    setError(null);
    try {
      await deleteDocumentApiCall(document_id);
      const responseMessage: AlertMessageInterface = {
        title: "Success",
        message: "Your document was successfully deleted",
      };
      setResponse(responseMessage);
      setTimeout(() => {
        setResponse(null);
      }, alertTime);
    } catch (err) {
      const errorMessage: AlertMessageInterface = {
        title: "Error Deleting Document",
        message: "We encountered a error while deleting the chosen document",
      };
      setError(errorMessage);
      setTimeout(() => {
        setError(null);
      }, alertTime);
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
