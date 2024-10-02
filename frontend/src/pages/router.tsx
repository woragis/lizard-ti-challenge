import { Route, Routes } from "react-router-dom";
import { PagesInterface } from "../types/pages";
import pagesData from "./pagesData";
import Layout from "./Layout";

const Router = () => {
  const pages = pagesData.map(({ name, path, element }: PagesInterface) => {
    return <Route key={name} path={path} element={element} />;
  });

  return (
    <Routes>
      <Route key="layout" path="/" element={<Layout />}>
        {pages}
      </Route>
    </Routes>
  );
};

export default Router;
