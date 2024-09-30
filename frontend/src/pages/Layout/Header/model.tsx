import pagesData from "../../pagesData";

const useHeaderModel = () => {
  const navLinksData = pagesData.slice(0, 2);

  return { navLinksData };
};

export default useHeaderModel;
