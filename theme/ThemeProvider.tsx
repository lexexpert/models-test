import { ReactNode, useMemo } from 'react';

// @mui
import { CssBaseline, useTheme } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { green, orange, purple } from '@mui/material/colors';

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const defaultTheme = useTheme();

  // @ts-ignore
  const themeOptions: ThemeOptionsType = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
        },
      },
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
