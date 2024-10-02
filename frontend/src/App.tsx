import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import GlobalStyles from "./styles/GlobalStyles";
import { MyProvider } from "./store";

function App() {
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
