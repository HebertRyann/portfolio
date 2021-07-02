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
    --color-text: #F4EDE8;
    --color-secundary: #6BFA8A;
    --color-complementary: #8766FF;
    --color-background: #312E38;
  }
  body, body[data-theme="light"] {
    --color-text: #000;
    --color-secundary: #0066ff;
    --color-complementary: #FF0066;
    --color-background: #f5f5f5;
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
  svg {
    cursor: pointer;
  }
`;