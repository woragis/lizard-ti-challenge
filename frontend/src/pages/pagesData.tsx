import { PagesInterface } from "../types/pages";
import Home from "./Home";

const pagesData: PagesInterface[] = [
  { name: "home", path: "/", element: <Home /> },
];

export default pagesData;
