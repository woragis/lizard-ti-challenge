import { HeaderView } from "./view";
import { useHeaderModel } from "./model";

const Header = () => {
  const { navLinksData } = useHeaderModel();
  return <HeaderView />;
};

export default Header;
