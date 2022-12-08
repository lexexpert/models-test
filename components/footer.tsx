// next
import NextLink from 'next/link';
// @mui
// import { styled } from '@mui/material/styles';
import { Grid, Divider, Container, Typography, Stack, Box } from '@mui/material';
// components
import { mainConfig } from '../config/main.config';
import { useTranslation } from 'next-i18next';
import Link from '@mui/material/Link';

// ----------------------------------------------------------------------

// const RootStyle = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   backgroundColor: theme.palette.background.default,
// }));

// ----------------------------------------------------------------------

export default function Footer() {
  const { t } = useTranslation();

  const LINKS = [
    {
      headline: t('for_creators'),
      children: [
        { name: t('promote_your_account'), href: '#' },
        { name: t('affiliate'), href: '#' },
        { name: t('advertising'), href: '#' },
      ],
    },
    {
      headline: t('legal'),
      children: [
        { name: t('terms_and_condition'), href: '#' },
        { name: t('cookies_settings'), href: '#' },
        { name: t('privacy_policy'), href: '#' },
        { name: t('dmca_takedown'), href: '#' },
      ],
    },
    {
      headline: t('main'),
      children: [
        { name: t('about_us'), href: '#' },
        { name: t('contact_us'), href: '#' },
        { name: t('faq'), href: '#' },
      ],
    },
  ];

  return (
    <Box sx={{ position: 'relative', backgroundColor: ({ palette }) => palette.background.paper }}>
      <Divider />
      <Container sx={{ pt: 10 }} maxWidth={mainConfig.maxContainerWidth}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'center' } }}
        >
          <Grid item xs={8} md={3}>
            <Typography sx={{ mb: 2 }} variant="h5">
              {mainConfig.appName}
            </Typography>
            <Typography variant="body2">{t('app_description')}</Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-around"
            >
              {LINKS?.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>
                  {list.children?.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref>
                      <Link color="inherit" variant="body2" sx={{ display: 'block' }}>
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: 'center',
          }}
        >
          © {mainConfig.appName}, {new Date().getFullYear()}. {t('all_rights_reserved')}
        </Typography>
      </Container>
    </Box>
  );
}
