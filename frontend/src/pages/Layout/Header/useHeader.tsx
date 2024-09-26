import pagesData from "../../pagesData";

const useHeader = () => {
  const navLinksData = pagesData.slice(0, 2);

  return { navLinksData };
};

export default useHeader;
