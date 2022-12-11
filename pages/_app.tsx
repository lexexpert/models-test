import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
// redux
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '../redux/store';
// styles
import 'styles/global.scss';
import ThemeProvider from '../theme/theme.provider';

function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
export default appWithTranslation(App);
