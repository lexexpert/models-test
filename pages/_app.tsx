import 'styles/global.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import ThemeProvider from '../theme/ThemeProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default appWithTranslation(App);
