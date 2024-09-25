import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
    outline: none;
    text-decoration: none;
    list-style-type: none;
  }
`;

export default GlobalStyles;
