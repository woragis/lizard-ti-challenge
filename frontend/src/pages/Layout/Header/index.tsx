import { HeaderView } from "./view";
import { useHeaderModel } from "./model";

const Header = () => {
  const model = useHeaderModel();

  return <HeaderView {...model} />;
};

export default Header;
