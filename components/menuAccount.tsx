import { useState, MouseEvent } from 'react';
// mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';
// icons
import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
// next
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuAccount() {
  const { t } = useTranslation();
  const desktopMenuId = 'user-account-menu-desktop';
  const mobileMenuId = 'user-account-menu-mobile';
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const theme = useTheme();
  const router = useRouter();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isUserMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogout = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    setIsAuthenticated(false);
    router.push('/');
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ mt: '45px' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const renderDesktopMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ mt: '45px' }}
      id={desktopMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isUserMenuOpen}
      onClose={handleMenuClose}
    >
      <Link href="/user/profile" legacyBehavior>
        <MenuItem onClick={handleMenuClose} href="">
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('profile')}</ListItemText>
        </MenuItem>
      </Link>
      <Link href="/user/settings" legacyBehavior>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('settings')}</ListItemText>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>{t('log_out')}</ListItemText>
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      {isAuthenticated ? (
        <Tooltip title={t('account')}>
          <IconButton
            id={isDesktop ? desktopMenuId : mobileMenuId}
            size="large"
            edge="end"
            aria-label="account"
            aria-controls={isDesktop ? desktopMenuId : mobileMenuId}
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Tooltip>
      ) : (
        <Button
          color="inherit"
          variant="outlined"
          onClick={() => setIsAuthenticated(true)}
          startIcon={<LoginIcon />}
          sx={{ whiteSpace: 'nowrap' }}
        >
          {t('sign_up')}
        </Button>
      )}
      {renderDesktopMenu}
      {renderMobileMenu}
    </Box>
  );
}
