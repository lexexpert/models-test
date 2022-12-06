import Head from 'next/head';
import { ReactChild } from 'react';
import { mainConfig } from 'config/main.config';
import Header from 'components/Header';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Footer from 'components/Footer';
import Box from '@mui/material/Box';

interface LayoutPropsType {
  children: ReactChild;
  home: boolean;
}

export default function Layout({ children, home }: LayoutPropsType) {
  return (
    <Stack sx={{ height: '100%' }}>
      <Head>
        <title>{mainConfig.appName}</title>
        <meta name="description" content="OnlyModels description" />
        <meta property="og:image" content={`favicon.ico`} />
        <meta name="og:title" content={mainConfig.appName} />
      </Head>
      <Box component="header">
        <Header />
      </Box>
      <Box component="main">
        <Container maxWidth={mainConfig.maxContainerWidth}>{children}</Container>
      </Box>
      <Box component="footer">
        <Footer />
      </Box>
    </Stack>
  );
}
