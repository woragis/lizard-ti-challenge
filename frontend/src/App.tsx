import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
