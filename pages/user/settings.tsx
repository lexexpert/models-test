import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import Layout from '../../components/layout';

export default function Settings() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h3">{t('settings')}</Typography>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
