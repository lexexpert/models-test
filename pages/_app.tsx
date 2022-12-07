import 'styles/global.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import ThemeProvider from 'theme/ThemeProvider';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  // const [showChild, setShowChild] = useState(false);

  // useEffect(() => {
  //   setShowChild(true);
  // }, []);

  // if (!showChild) {
  //   return null;
  // }

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default appWithTranslation(App);
