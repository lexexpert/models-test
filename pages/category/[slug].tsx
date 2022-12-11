import { useEffect } from 'react';
// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// next
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next/types';
// redux
import { ReduxState } from '../../redux/rootReducer';
import { dispatch, useSelector } from '../../redux/store';
import { setSelectedCategory } from '../../redux/slices/categories.slice';
// components
import Layout from '../../components/layout';

export default function CategoryPage() {
  const {
    query: { slug },
    locale = 'en',
  } = useRouter();
  const categories = useSelector((state: ReduxState) => state.categories);

  useEffect(() => {
    const selected = categories?.all?.find((category) => category.slug === slug);
    dispatch(setSelectedCategory(selected));
  }, [slug]);

  console.log({ slug });

  return (
    <Layout>
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h3">{categories?.selected?.[`name_${locale}`]}</Typography>
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
