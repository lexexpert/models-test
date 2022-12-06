// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack, Box } from '@mui/material';
// components
import { mainConfig } from 'config/main.config';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'For creators',
    children: [
      { name: 'Promote your account', href: '#' },
      { name: 'Affiliate', href: '#' },
      { name: 'Advertising', href: '#' },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '/terms' },
      { name: 'Cookies settings', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'DMCA Takedown', href: '#' },
    ],
  },
  {
    headline: 'Main',
    children: [
      { name: 'About us', href: '/' },
      { name: 'Contact us', href: '/' },
      { name: 'FAQs', href: '/' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <RootStyle>
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
            <Typography variant="body2">A big database of the model profiles</Typography>
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
                  {list.children.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref>
                      <Link color="primary" variant="body2" sx={{ display: 'block' }}>
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
          © {mainConfig.appName}, {new Date().getFullYear()}. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
