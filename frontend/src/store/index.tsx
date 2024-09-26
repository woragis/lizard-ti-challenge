import {
  createDocumentApiCall,
  deleteDocumentApiCall,
  fetchDocumentsApiCall,
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

const DataContext = createContext<any>(null);

export const useData = () => useContext(DataContext);

const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DocumentInterface[]>([]);
  const [response, setResponse] = useState<Response>({ message: "" });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDocuments = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchDocumentsApiCall();
      setData(data.data);
      setResponse(data);
    } catch (err) {
      setError("Failed to fetch documents");
    } finally {
      setLoading(false);
    }
  };

  const createDocument = async (document: DocumentInterface) => {
    setLoading(true);
    setError(null);
    try {
      const data = await createDocumentApiCall(document);
      setResponse(data);
    } catch (err) {
      setError("Failed to save document");
    } finally {
      setLoading(false);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);
  return (
    <DataContext.Provider
      value={{
        data,
        response,
        error,
        loading,
        fetchDocuments,
        createDocument,
        deleteDocument,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
