import Head from 'next/head';
import styles from './layout.module.css';
import { ReactChild } from 'react';
import { mainConfig } from 'config/main.config';

interface LayoutPropsType {
  children: ReactChild;
  home: boolean;
}

export default function Layout({ children, home }: LayoutPropsType) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{mainConfig.appName}</title>
        <meta name="description" content="OnlyModels description" />
        <meta property="og:image" content={`favicon.ico`} />
        <meta name="og:title" content={mainConfig.appName} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1>{mainConfig.appName} home page layout</h1>
          </>
        ) : (
          <>
            <div>Other layout</div>
          </>
        )}
      </header>
      <main>{children}</main>
      <footer>
        <div>Footer</div>
      </footer>
    </div>
  );
}
