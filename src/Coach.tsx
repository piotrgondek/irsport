import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import IRS from './assets/IRS.jpg';
import angelikaGronska from './assets/osoby/IMG_0189.jpeg';
import sebastianRyzak from './assets/osoby/20260319_165430.jpg';
import adamWargal from './assets/osoby/IMG_0325.jpeg';
import wojciechLachowski from './assets/osoby/IMG_0498.jpeg';
import SectionGrid from './SectionGrid';
import useRefs from './common/hooks/useRefs';

interface CoachCard {
  image: string;
  titleKey: string;
  nameKey: string;
  descriptionKeys: Array<string>;
  imagePosition?: string;
  md?: 6 | 12;
}

const Coach: React.FC = () => {
  const { coachRef } = useRefs();
  const { t } = useTranslation();
  const cards: Array<CoachCard> = [
    {
      image: IRS,
      titleKey: 'club.club',
      nameKey: 'club.name',
      descriptionKeys: ['club.description.p1', 'club.description.p2', 'club.description.p3'],
      md: 12,
    },
    {
      image: adamWargal,
      titleKey: 'coach.coach',
      nameKey: 'coach.name',
      descriptionKeys: ['coach.description.p1', 'coach.description.p2', 'coach.description.p3'],
      imagePosition: 'center 38%',
    },
    {
      image: angelikaGronska,
      titleKey: 'coach.coach',
      nameKey: 'coach.profiles.angelika.name',
      descriptionKeys: [
        'coach.profiles.angelika.description.p1',
        'coach.profiles.angelika.description.p2',
        'coach.profiles.angelika.description.p3',
        'coach.profiles.angelika.description.p4',
      ],
    },
    {
      image: wojciechLachowski,
      titleKey: 'coach.coach',
      nameKey: 'coach.profiles.wojciech.name',
      descriptionKeys: ['coach.profiles.wojciech.description.p1'],
    },
    {
      image: sebastianRyzak,
      titleKey: 'coach.coach',
      nameKey: 'coach.profiles.sebastian.name',
      descriptionKeys: ['coach.profiles.sebastian.description.p1'],
    },
  ];

  return (
    <Box ref={coachRef}>
      <SectionGrid>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item xs={12} md={card.md || 6} key={card.nameKey} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 1,
                }}
              >
                <CardMedia
                  title={t(card.nameKey as any)}
                  image={card.image}
                  sx={{
                    paddingTop: '56.25%',
                    backgroundPosition: card.imagePosition,
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h4">{t(card.titleKey as any)}</Typography>
                  <Typography variant="h5">{t(card.nameKey as any)}</Typography>
                  {card.descriptionKeys.map((descriptionKey, index) => (
                    <Typography
                      variant="body1"
                      gutterBottom={index < card.descriptionKeys.length - 1}
                      key={descriptionKey}
                    >
                      {t(descriptionKey as any)}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionGrid>
    </Box>
  );
};

export default Coach;
