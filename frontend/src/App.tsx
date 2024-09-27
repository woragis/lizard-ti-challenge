import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import GlobalStyles from "./styles/GlobalStyles";
import { MyProvider } from "./store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MyProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
