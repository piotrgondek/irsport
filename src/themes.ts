import { createTheme } from '@mui/material';

export const light = createTheme();

export const dark = createTheme({
  palette: {
    mode: 'dark',
  },
});
