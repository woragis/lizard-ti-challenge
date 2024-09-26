import { PagesInterface } from "../types/pages";
import Home from "./Home";
import Documents from "./Documents";

const pagesData: PagesInterface[] = [
  { name: "home", path: "/", element: <Home /> },
  { name: "documents", path: "/documents", element: <Documents /> },
];

export default pagesData;
