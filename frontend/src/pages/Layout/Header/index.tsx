import { Link } from "react-router-dom";
import pagesData from "../../pagesData";
import { PagesInterface } from "../../../types/pages";

const Header = () => {
  const navLinksData = pagesData;
  const navLinks = navLinksData.map(({ name, path }: PagesInterface) => {
    return <Link to={path}>{name}</Link>;
  });
  return <header>{navLinks}</header>;
};

export default Header;
