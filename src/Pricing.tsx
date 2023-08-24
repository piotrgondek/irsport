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
import { useTranslation } from 'react-i18next';
import SectionGrid from './SectionGrid';
import useRefs from './common/hooks/useRefs';

interface PricingEntity {
  lvl: string;
  price: number;
  full?: boolean;
  recommended?: boolean;
}

const Pricing: React.FC = () => {
  const { pricingRef } = useRefs();
  const { t } = useTranslation();
  const pricing: Array<PricingEntity> = [
    {
      lvl: t('pricing.offers.1.name'),
      price: 120,
    },
    {
      lvl: t('pricing.offers.2.name'),
      price: 180,
      recommended: true,
    },
    {
      lvl: t('pricing.offers.3.name'),
      price: 240,
    },
    {
      lvl: t('pricing.offers.0.name'),
      price: 40,
    },
  ];

  const info = [t('pricing.points.1'), t('pricing.points.2'), t('pricing.points.3')];

  return (
    <Box ref={pricingRef}>
      <SectionGrid>
        <Typography variant="h4">{t('appbar.menu.pricing')}</Typography>
        <Grid container spacing={2}>
          {pricing.map((offer) => (
            <Grid key={offer.lvl} item md={offer.full ? 12 : 6} xs={12}>
              <Card
                sx={{
                  position: 'relative',
                  marginX: offer.recommended ? 0 : 2,
                  paddingY: {
                    md: 6,
                    xs: 1,
                  },
                  paddingX: {
                    md: offer.recommended ? 8 : 6,
                    xs: offer.recommended ? 3 : 1,
                  },
                }}
                elevation={offer.recommended ? 6 : 1}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h5" sx={{ paddingBottom: 2 }}>
                    {offer.lvl}
                  </Typography>
                  <Chip label={`${offer.price}PLN`} color={offer.recommended ? 'success' : 'default'} />
                  {offer.recommended && (
                    <Chip
                      sx={{
                        position: 'absolute',
                        bottom: 22,
                        left: -53,
                        transform: 'rotate(33deg)',
                        boxShadow: 6,
                        paddingX: 5,
                      }}
                      label={t('pricing.highlighted')}
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
};

export default Pricing;
