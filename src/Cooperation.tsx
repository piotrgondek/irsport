import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import benefitSystems from './assets/logos/benefit-systems.jpg';
import medicover from './assets/logos/Mcov-sport-pion.jpg';
import fit from './assets/logos/fit.jpg';
import pzkb1 from './assets/logos/logo PZKB.jpg';
import pzkb2 from './assets/logos/pobraneLogo PZB.jpg';
import ont from './assets/darczyncy/ONT.png';
// import ministerstwo from './assets/darczyncy/ministerstwo.jpg';
import szkola from './assets/darczyncy/wszibwk.png';
import flaga from './assets/flaga.png'

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
  // {
  //   src: ministerstwo,
  //   name: 'Rządowy Program "KLUB"',
  // },
  {
    src: szkola,
    name: 'Wyższa Szkoła Zarządzania i Bankowości w Krakowie',
  },
];

const Cooperation: React.FC = () => {
  return (
    <>
      <Grid container spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingY: 4,
        }}
      >
        <Grid item>
          <img src={flaga} alt="Flaga Polski" width="200px" />
        </Grid>
        <Grid item>
          <Stack direction="column">
            <Typography>Instytut Rozwoju Sportu realizuje zadanie publiczne dofinansowane z Budżetu Państwa,<br />ze środków finansowych Funduszu Rozwoju Kultury Fizycznej,<br /> polegające na rozwijaniu sportu dzieci i młodzieży.</Typography>
            <Typography>Dofinansowanie: 17 000 zł,</Typography>
            <Typography>Całkowita wartość: 23 220 zł,</Typography>
            <Typography>Data podpisania umowy o dofinansowanie: 2024-06-28.</Typography>
          </Stack>
        </Grid>
      </Grid>
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
