import { useMyContext } from "@/store";

const useDocumentsModel = () => {
  const { data, loading, fetchDocuments } = useMyContext();

  return { data, loading, fetchDocuments };
};

export { useDocumentsModel };
