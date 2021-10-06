import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import adamWargal from './assets/AdamWargal.jpg';
import IRS from './assets/IRS.jpg';
import SectionGrid from './SectionGrid';

const Coach = React.forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <Box ref={ref as any}>
      <SectionGrid>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Card>
              <CardMedia
                title="Adam Wargal"
                image={adamWargal}
                sx={{
                  paddingTop: '56.25%',
                }}
              />
              <CardContent>
                <Typography variant="h2">{t('coach.coach')}</Typography>
                <Typography variant="h4">{t('coach.name')}</Typography>
                <Typography variant="body1" gutterBottom>
                  {t('coach.description.p1')}
                </Typography>

                <Typography variant="body1" gutterBottom>
                  {t('coach.description.p2')}
                </Typography>

                <Typography variant="body1">
                  {t('coach.description.p3')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Card>
              <CardMedia
                title="IRS"
                image={IRS}
                sx={{
                  paddingTop: '56.25%',
                }}
              />
              <CardContent>
                <Typography variant="h2">{t('club.club')}</Typography>
                <Typography variant="h4">{t('club.name')}</Typography>
                <Typography variant="body1" gutterBottom>
                  {t('club.description.p1')}
                </Typography>

                <Typography variant="body1" gutterBottom>
                  {t('club.description.p2')}
                </Typography>

                <Typography variant="body1">
                  {t('club.description.p3')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </SectionGrid>
    </Box>
  );
});

export default Coach;
