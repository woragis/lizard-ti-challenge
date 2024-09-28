import * as styled from "./styles";
import { PagesInterface } from "../../../types/pages";
import { Link } from "react-router-dom";
import useHeader from "./useHeader";
import { Button } from "@/components/ui/button";
import { useMyContext } from "@/store";
import CustomAlertDialog from "@/components/CustomAlertDialog";

const HeaderView = () => {
  const { error, response } = useMyContext();

  const { navLinksData } = useHeader();
  const navLinks = navLinksData.map(({ name, path }: PagesInterface) => {
    return (
      <styled.LinkContainer key={name}>
        <Link to={path}>
          <Button className="shadow-md w-32 font-bold text-zinc-600 hover:text-zinc-900">
            {name === "documents"
              ? "documentos".toLocaleUpperCase()
              : name.toLocaleUpperCase()}
          </Button>
        </Link>
      </styled.LinkContainer>
    );
  });

  return (
    <styled.Nav className="shadow-lg">
      <styled.LinksContainer>{navLinks}</styled.LinksContainer>
      {response && <CustomAlertDialog {...response} variant="default" />}
      {error && <CustomAlertDialog {...error} variant="destructive" />}
    </styled.Nav>
  );
};

export default HeaderView;
