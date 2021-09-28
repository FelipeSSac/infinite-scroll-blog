import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --yellow: #F1A10A;
    --dark: #2D2D2D;
    --softDark: #00000099;
    --yellowGradient: linear-gradient(90deg, #F1A10A 0%, #342303 100%);
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: 'Rubik', sans-serif;
  }

  button{
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
  }
`;
