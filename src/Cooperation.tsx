import React from 'react';
import {
  Grid, Typography,
} from '@mui/material';
import benefitSystems from './assets/logos/benefit-systems.jpg';
import ckSystem from './assets/logos/ck-system.png';
import fit from './assets/logos/fit.jpg';

const Cooperation: React.FC = () => {
  const images = React.useMemo(() => [
    {
      src: benefitSystems,
      name: 'Benefit Systems',
    },
    {
      src: ckSystem,
      name: 'CK System',
    },
    {
      src: fit,
      name: 'FitProfit',
    },
  ], []);

  return (
    <>
      <Typography variant="h2">Współpracujemy z</Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {images.map((image) => (
          <Grid item>
            <img src={image.src} alt={image.name} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cooperation;
