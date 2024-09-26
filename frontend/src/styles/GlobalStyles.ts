import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  #root {
    width: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    outline: none;
    text-decoration: none;
    list-style-type: none;
  }
`;

export default GlobalStyles;
