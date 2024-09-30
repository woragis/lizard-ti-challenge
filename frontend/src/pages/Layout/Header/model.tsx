import pagesData from "../../pagesData";

export const useHeaderModel = () => {
  const navLinksData = pagesData.slice(0, 2);

  return { navLinksData };
};
