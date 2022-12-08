// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// components
import Layout from '../components/layout';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h3">{t('home')}</Typography>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
