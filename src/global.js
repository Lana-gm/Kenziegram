import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
        --bg: #1B1F29; // Background
        --bgLight: #242A38; // Background Light
        --blue: linear-gradient(180deg, #007BFF 0%, #17A2B8 100%); // Azul Gradiente
        --white: #FFFFFF;
        --gray: rgba(255, 255, 255, 0.26); // Cinza Transparente
    }

  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;