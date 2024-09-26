import * as styled from "./styles";
import { PagesInterface } from "../../../types/pages";
import { Link } from "react-router-dom";
import useHeader from "./useHeader";

const HeaderView = () => {
  const { navLinksData } = useHeader();
  const navLinks = navLinksData.map(({ name, path }: PagesInterface) => {
    return (
      <styled.LinkContainer>
        <Link to={path}>{name.toLocaleUpperCase()}</Link>
      </styled.LinkContainer>
    );
  });

  return (
    <styled.Nav>
      <styled.LinksContainer>{navLinks}</styled.LinksContainer>
    </styled.Nav>
  );
};

export default HeaderView;
