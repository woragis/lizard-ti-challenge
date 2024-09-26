import useHeader from "./useHeader";
import HeaderView from "./view";

const Header = () => {
  return <HeaderView {...useHeader} />;
};

export default Header;
