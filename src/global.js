import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --bg: #1B1F29; // Background
    --bgLight: #242A38; // Background Light
    --gradient: linear-gradient(180deg, rgba(47, 47, 47, 0.25) 0%, rgba(47, 47, 47, 0.49) 25.52%, rgba(47, 47, 47, 0.68) 54.17%, rgba(47, 47, 47, 0.9) 79.69%, #2F2F2F 100%);
    --blue: linear-gradient(180deg, #007BFF 0%, #17A2B8 100%); // Azul Gradiente
    --white: #FFFFFF;
    --gray: rgba(153, 153, 153, 0.40); // Cinza Transparente
    --darkGray: #4E586E;
    --blueIcons: #007BFF;
  }

  main {
    width: 100%;
    height: 100%;
  }

  body, input {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Sans-Serif;
    border: 0;
  }
`;