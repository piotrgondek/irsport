import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import adamWargal from './assets/AdamWargal.jpg';
import SectionGrid from './SectionGrid';

const Coach = React.forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <Box ref={ref as any}>
      <SectionGrid>
        <Card>
          <CardMedia
            style={{ paddingTop: '56.25%' }}
            title="Adam Wargal"
            image={adamWargal}
          />
          <CardContent>
            <Typography variant="h2">{t('coach.name')}</Typography>
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
      </SectionGrid>
    </Box>
  );
});

export default Coach;
