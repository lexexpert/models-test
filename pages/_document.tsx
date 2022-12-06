import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

          {/* Icons */}
          <link rel="shortcut icon" type="image/x-icon" href={'/favicon.ico'} />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href={'/favicon.ico'} sizes="16x16" />
          <link rel="icon" href={'/favicon.ico'} sizes="32x32" />
          <link rel="icon" href={'/favicon.ico'} sizes="48x48" />
          <link rel="icon" href={'/favicon.ico'} sizes="96x96" />
          <link rel="icon" href={'/favicon.ico'} sizes="144x144" />

          {/* iOS icons */}
          <link rel="apple-touch-icon" href={'/favicon.ico'} sizes="120x120" />
          <link rel="apple-touch-icon" href={'/favicon.ico'} sizes="152x152" />
          <link rel="apple-touch-icon" href={'/favicon.ico'} sizes="180x180" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
