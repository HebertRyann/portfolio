import type { AppProps } from 'next/app'
import Globalstyles from '../styles/Globalstyles';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../styles/stylesConfig';
// import { ThemeSelectProvider, useTheme } from '../Hooks/Theme';
import { useEffect } from 'react';



function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <>
        <Globalstyles/>
        <Component {...pageProps} />
    </>
    
  )
}
export default MyApp
