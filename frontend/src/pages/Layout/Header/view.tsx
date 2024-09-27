import * as styled from "./styles";
import { PagesInterface } from "../../../types/pages";
import { Link, useLocation } from "react-router-dom";
import useHeader from "./useHeader";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useMyContext } from "@/store";
import AlertDialog from "@/components/AlertDialog";

const HeaderView = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { error, response } = useMyContext();
  console.log("Error:", error);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading delay
    return () => clearTimeout(timer); // Cleanup on route change
  }, [location]);

  const { navLinksData } = useHeader();
  const navLinks = navLinksData.map(({ name, path }: PagesInterface) => {
    return (
      <styled.LinkContainer>
        <Link to={path}>
          <Button className="shadow-md w-32 font-bold text-zinc-600">
            {name.toLocaleUpperCase()}
          </Button>
        </Link>
      </styled.LinkContainer>
    );
  });

  return (
    <styled.Nav className="shadow-lg">
      <styled.LinksContainer>{navLinks}</styled.LinksContainer>
      {isLoading && <>Loading component</>}
      {error && <>Attention</>}
      {response && <AlertDialog {...response} variant="default" />}
      {error && <AlertDialog {...error} variant="destructive" />}
    </styled.Nav>
  );
};

export default HeaderView;
