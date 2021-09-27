import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Done } from '@mui/icons-material';
import SectionGrid from './SectionGrid';

interface PricingEntity {
  lvl: string
  name: string
  price: number
  full?: boolean
  recommended?: boolean
}

const Pricing = React.forwardRef((_, ref) => {
  const pricings = React.useMemo<Array<PricingEntity>>(
    () => [
      {
        lvl: 'początkujący',
        name: '4 wejścia',
        price: 80,
      },
      {
        lvl: 'niezaawansowany',
        name: '8 wejść',
        price: 110,
      },
      {
        lvl: 'średniozaawansowany',
        name: '12 wejść',
        price: 130,
        recommended: true,
      },
      {
        lvl: 'zaawansowany',
        name: '16 wejść',
        price: 150,
      },
      {
        lvl: 'stali bywalcy',
        name: 'open',
        price: 210,
        full: true,
      },
    ],
    [],
  );

  const info = React.useMemo<Array<string>>(
    () => [
      'Opłata wpisowa roczna na ubezpieczenie i związki sportowe 100PLN.',
      'Pierwszy trening gratis.',
      'Karnety ważne jeden miesiąc.',
    ],
    [],
  );

  return (
    <Box
      className="irs-cennik"
      ref={ref as any}
    >
      <SectionGrid>
        <Typography variant="h2">Cennik wejść</Typography>
        <Grid
          container
          spacing={2}
        >
          {pricings.map((offer) => (
            <Grid
              key={offer.name}
              item
              md={offer.full ? 12 : 6}
              xs={12}
              sx={{
                position: 'relative',
              }}
            >
              <Card
                sx={{
                  p: {
                    md: 6,
                    xs: 1,
                  },
                }}
                elevation={offer.recommended ? 4 : 1}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h5">
                    {offer.lvl}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginY: {
                        md: 2,
                      },
                    }}
                  >
                    {offer.name}
                  </Typography>
                  <Chip
                    label={`${offer.price}PLN`}
                    color={offer.recommended ? 'success' : 'default'}
                  />
                  {offer.recommended && (
                    <Chip
                      sx={{
                        position: 'absolute',
                        top: 22,
                        left: -12,
                        transform: 'rotate(-33deg)',
                      }}
                      label="najczęstrzy wybór"
                      color="info"
                    />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <List>
          {info.map((txt) => (
            <ListItem key={txt}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText>{txt}</ListItemText>
            </ListItem>
          ))}
        </List>
      </SectionGrid>
    </Box>
  );
});

export default Pricing;
