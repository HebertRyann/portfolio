import type { AppProps } from 'next/app'
import Head from 'next/head';
import Globalstyles from '../styles/Globalstyles';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../styles/stylesConfig';
// import { ThemeSelectProvider, useTheme } from '../Hooks/Theme';
import { useEffect } from 'react';



function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <>
      <Head>
        <title>Hebert Ryan</title>
      </Head>
      <Globalstyles/>
      <Component {...pageProps} />
    </>
    
  )
}
export default MyApp
