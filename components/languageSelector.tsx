import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function LanguageSelector() {
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);
  const [selectedLang, setSelectedLang] = useState<typeof languages[0]>();
  const { t } = useTranslation();
  const { locale = 'en', asPath } = useRouter();

  const languages = [
    {
      id: 'en',
      name: 'English',
    },
    {
      id: 'ru',
      name: 'Русский',
    },
  ];

  useEffect(() => {
    setSelectedLang(languages.find((lang) => lang.id === locale));
  }, [locale]);

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  return (
    <Box>
      <Tooltip title={t('language')}>
        <IconButton
          onClick={handleOpenLangMenu}
          size="large"
          edge="end"
          color="inherit"
          aria-label="language"
          sx={{ mr: 3 }}
        >
          <Typography variant="body1">{String(selectedLang?.id || 'EN').toUpperCase()}</Typography>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-language"
        anchorEl={anchorElLang}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElLang)}
        onClose={handleCloseLangMenu}
      >
        {languages?.map((lang) => (
          <MenuItem key={lang.id} onClick={handleCloseLangMenu}>
            <Link href={`${asPath}`} passHref locale={lang.id}>
              <Typography textAlign="center">{lang.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
