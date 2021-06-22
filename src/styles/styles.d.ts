import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    body: string;
    secundaryColor: string;
    color: string;
  }
}