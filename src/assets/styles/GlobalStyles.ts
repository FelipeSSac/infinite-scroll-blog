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

    &::-webkit-scrollbar {
      width: 14px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--yellow);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--softDark);
    }
  }

  button{
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
  }

  @media (max-width: 1400px) {
    html {
      font-size: 85%;
    }
  }

  @media (max-width: 1170px){
    html {
      font-size: 72.5%;
    }
  }

  @media (max-width: 1000px){
    html {
      font-size: 63%;
    }
  }

  @media (max-width: 760px){
    html {
      font-size: 57.5%;
    }
  }

  @media (max-width: 490px){
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 395px){
    html {
      font-size: 43%;
    }
  }
`;
