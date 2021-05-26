import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #E5E5E5;    
    --dark-blue: #084154;
    --blue: #3EC6E0;    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1120px ) {
      font-size: 93.75%;
    }

    @media (max-width: 720px ) {
      font-size: 87.5%;
    }
  }
 
  body {
    margin: 0;
    padding: 0;
    background: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`