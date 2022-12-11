// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// next
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// components
import Layout from '../components/layout';

export default function HomePage() {
  const { t } = useTranslation();
  console.log('RENDER INDEX');

  return (
    <Layout>
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h3">{t('home')}</Typography>
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
