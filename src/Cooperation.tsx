import React from 'react';
import { Grid } from '@mui/material';
import benefitSystems from './assets/logos/benefit-systems.jpg';
import medicover from './assets/logos/Mcov-sport-pion.jpg';
import fit from './assets/logos/fit.jpg';
import pzkb1 from './assets/logos/logo PZKB.jpg';
import pzkb2 from './assets/logos/pobraneLogo PZB.jpg';

const images = [
  {
    src: pzkb1,
    name: 'pzkb1',
  },
  {
    src: pzkb2,
    name: 'pzkb2',
  },
  {
    src: benefitSystems,
    name: 'Benefit Systems',
  },
  {
    src: medicover,
    name: 'Medicover',
  },
  {
    src: fit,
    name: 'FitProfit',
  },
];

const Cooperation: React.FC = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        paddingY: 4,
      }}
    >
      {images.map((image) => (
        <Grid item key={image.name}>
          <img src={image.src} alt={image.name} style={{ maxWidth: '200px' }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cooperation;
