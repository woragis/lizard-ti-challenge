import { useMyContext } from "@/store";

export const useHome = () => {
  const { data } = useMyContext();
  return { data };
};
