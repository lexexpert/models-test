// next
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
// config
import { mainConfig } from '../config/main.config';
// mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
// Icons

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
// components
import Categories from './categories';
import Stack from '@mui/material/Stack';
import LanguageSelector from './languageSelector';
import MenuAccount from './menuAccount';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.down('md')]: {
    margin: 0,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: theme.spacing(1),
    // marginBottom: theme.spacing(1),
    // display: 'flex',
    // flexDirection: 'column',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      padding: theme.spacing(0),
      // minHeight: 'auto',
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth={mainConfig.maxContainerWidth}>
          {/* <StyledToolbar disableGutters> */}
          <StyledToolbar
            disableGutters
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {!isDesktop && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Link href="/" legacyBehavior>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  cursor: 'pointer',
                  overflow: 'visible',
                }}
              >
                {mainConfig.appName}
              </Typography>
            </Link>
            {isDesktop && <Categories />}
            {isDesktop && (
              <Search sx={{ flexGrow: 1 }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder={t('search')}
                  inputProps={{ 'aria-label': 'search', style: { width: '100%' } }}
                />
              </Search>
            )}
            <Stack direction="row" alignItems="center">
              <LanguageSelector />
              <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                <MenuAccount />
              </Box>
            </Stack>
          </StyledToolbar>
          {!isDesktop && (
            <StyledToolbar disableGutters>
              <Search sx={{ flexGrow: 1 }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder={t('search')}
                  inputProps={{ 'aria-label': 'search', style: { width: '100%' } }}
                />
              </Search>
            </StyledToolbar>
          )}
          {/* </StyledToolbar> */}
        </Container>
      </AppBar>
    </Box>
  );
}
