import { useEffect, useState } from 'react';
// next
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
// mui
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
// icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { dispatch, useSelector } from '../redux/store';
import { ReduxState } from '../redux/rootReducer';
import { api } from '../utils/api.util';
import { pathsConfig } from '../config/paths.config';
import { setCategories } from '../redux/slices/categories.slice';
import { Category } from '../types/category.type';
import { useRouter } from 'next/router';

export default function Categories() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const open = Boolean(anchorEl);
  const categories = useSelector((state: ReduxState) => state.categories);
  const { locale = 'en' } = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      console.log('fetchCategories');

      try {
        const _categories = await api
          .get(pathsConfig.api.categories.index)
          .then(({ data }) => sortCategories(data));
        if (_categories) {
          dispatch(setCategories(_categories));
        } else {
          dispatch(setCategories([]));
        }
      } catch (error) {
        console.error(error);
        dispatch(setCategories([]));
      }
    };
    if (!categories?.all?.length) {
      fetchCategories();
    }
  }, []);

  const sortCategories = (categories: Category[]) => {
    return categories?.sort((a: Category, b: Category) => {
      const nameA = a[`name_${locale}`].toUpperCase();
      const nameB = b[`name_${locale}`].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack sx={{ ml: 3 }}>
      <Button
        id="categories"
        aria-controls={open ? 'categories' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="inherit"
        variant="outlined"
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        {t('categories')}
      </Button>
      <Menu
        id="categories"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'categories',
          style: { minWidth: 150 },
        }}
        sx={{ maxHeight: 315 }}
      >
        {categories?.all?.map((category) => (
          <Link key={category.slug} href={`${pathsConfig.category}/${category.slug}`}>
            <MenuItem onClick={handleClose} selected={category.id === categories.selected?.id}>
              {category[`name_${locale}`]}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Stack>
  );
}
