import React from 'react';
import { Grid } from '@mui/material';

const SectionGrid: React.FC = ({ children }) => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    sx={{
      '@media (min-width:0px) and (orientation: landscape)': {
        paddingY: `${48}px`,
      },
      '@media (min-width:600px)': {
        paddingY: `${64}px`,
      },
      paddingY: `${56}px`,
      minHeight: '100vh',
    }}
  >
    <Grid item xl={8} lg={9} md={10} xs={11}>
      {children}
    </Grid>
  </Grid>
);

export default SectionGrid;
