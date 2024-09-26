import * as styled from "./styles";
import { PagesInterface } from "../../../types/pages";
import { Link, useLocation } from "react-router-dom";
import useHeader from "./useHeader";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useData } from "@/store";

const HeaderView = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { error } = useData();
  console.log(error);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading delay
    return () => clearTimeout(timer); // Cleanup on route change
  }, [location]);

  const { navLinksData } = useHeader();
  const navLinks = navLinksData.map(({ name, path }: PagesInterface) => {
    return (
      <styled.LinkContainer>
        <Button className="shadow-md w-32 font-bold text-zinc-600">
          <Link to={path}>{name.toLocaleUpperCase()}</Link>
        </Button>
      </styled.LinkContainer>
    );
  });

  return (
    <styled.Nav className="shadow-lg">
      <styled.LinksContainer>{navLinks}</styled.LinksContainer>
      {isLoading && <>Loading component</>}
      {error && <>Attention</>}
    </styled.Nav>
  );
};

export default HeaderView;
