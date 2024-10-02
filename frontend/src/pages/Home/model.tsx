import { useMyContext } from "@/store";
import { useNavigate } from "react-router-dom";

export const useHome = () => {
  const { data } = useMyContext();
  const navigate = useNavigate();

  const navigateToDocuments = () => {
    navigate("/documents");
  };

  return { data, navigateToDocuments };
};
