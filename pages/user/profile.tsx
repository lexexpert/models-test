import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next/types';
import Layout from '../../components/layout';

export default function UserProfilePage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h3">{t('profile')}</Typography>
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
