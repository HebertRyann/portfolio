import { createGlobalStyle } from 'styled-components';
import { Roboto } from './stylesConfig';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
    font-weight: 400;
    /* ::-webkit-scrollbar {
      scroll-behavior: auto;
      
    } */
    /* ::-webkit-scrollbar-thumb {
      background: #000;
    }
    ::-webkit-scrollbar-track {
      background: #e3e3e3;
    } */
    

  }
  body, body[data-theme="dark"] {
    --color-text: #f4f4f4;
    --color-secundary: #892cdc;
    --color-background: #242421;
  }
  body, body[data-theme="light"] {
    --color-text: #000;
    --color-secundary: #0066ff;
    --color-background: #fff;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    transition: background 0.25s ease-in-out;
  }
  body, input, button {
    font-family: ${Roboto}, sans-serif;
  }
  button {
    cursor: pointer;
  }
  button, input {
    border: 0;
  }
`;