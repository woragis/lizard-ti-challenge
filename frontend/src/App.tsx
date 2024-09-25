import { useState } from "react";
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
