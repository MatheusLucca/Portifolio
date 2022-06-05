import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text: #363f5f;
    --red: #e52e4d;
    --background: #f0f2f5;
  

    --white: #ffffff;

    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-600: #4A5568;
    --gray-800: #29292e;
    --gray-850: #1f2729;
    --gray-900: #121214;


    --cyan-500: #61dafb;
    --yellow-500: #eba417;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15 px
    }
    @media (min-width: 720px) {
      font-size: 87.5%; // 14 px
    }
  }
  body {
    background: var(--gray-900);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    color: var(--white);
  }
  h1,h2,strong{
    font-weight:700;
  }
  button {
    cursor: pointer;
  }
  
  a{
    color: inherit;
    text-decoration: none;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;