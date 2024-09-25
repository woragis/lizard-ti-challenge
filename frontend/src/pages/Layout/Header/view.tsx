import * as styled from "./styles";
import useHeader from "./useHeader";
import { PagesInterface } from "../../../types/pages";
import { Link } from "react-router-dom";

const HeaderView = (props: ReturnType<typeof useHeader>) => {
  const navLinks = props.navLinksData.map(({ name, path }: PagesInterface) => {
    return (
      <styled.LinkContainer>
        <Link to={path}>{name}</Link>
      </styled.LinkContainer>
    );
  });
  return (
    <header>
      <styled.Nav>
        <styled.LinksContainer>{navLinks}</styled.LinksContainer>
      </styled.Nav>
    </header>
  );
};

export default HeaderView;
