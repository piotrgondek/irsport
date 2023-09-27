import React from 'react';
import { Grid, Typography } from '@mui/material';
import benefitSystems from './assets/logos/benefit-systems.jpg';
import medicover from './assets/logos/Mcov-sport-pion.jpg';
import fit from './assets/logos/fit.jpg';
import pzkb1 from './assets/logos/logo PZKB.jpg';
import pzkb2 from './assets/logos/pobraneLogo PZB.jpg';
import ont from './assets/darczyncy/ONT.png';
import ministerstwo from './assets/darczyncy/ministerstwo.jpg';

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

const darczyncy = [
  {
    src: ont,
    name: 'Oprogramowanie Naukowo-Techniczne',
  },
  {
    src: ministerstwo,
    name: 'Rządowy Program "KLUB"',
  },
];

const Cooperation: React.FC = () => {
  return (
    <>
      <Typography variant="h4" align="center" sx={{ paddingY: 4 }}>
        Nasi darczyńcy
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          paddingY: 4,
        }}
      >
        {darczyncy.map((image) => (
          <Grid item key={image.name}>
            <img src={image.src} alt={image.name} width="300px" />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" align="center" sx={{ paddingY: 4 }}>
        Współpracujemy z
      </Typography>
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
            <img src={image.src} alt={image.name} width="200px" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cooperation;
