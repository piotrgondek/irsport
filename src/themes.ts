import { createTheme } from '@mui/material';

export const light = createTheme();

export const dark = createTheme({
  palette: {
    mode: 'dark',
  },
});

[light, dark].forEach((theme) => {
  // eslint-disable-next-line no-param-reassign
  theme.typography.h2 = {
    ...theme.typography.h2,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  };
});
