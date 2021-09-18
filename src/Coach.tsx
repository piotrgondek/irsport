import React from 'react';
import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import adamWargal from './assets/AdamWargal.jpg';

const Coach: React.FC = () => (
  <Grid
    container
    justifyContent="center"
    sx={{
      marginY: {
        xs: 0,
        md: 12,
      },
    }}
  >
    <Grid
      item
      xl={5}
      lg={6}
      md={8}
      sm={10}
      xs={12}
    >
      <Card>
        <CardContent>
          <Typography variant="h2" gutterBottom>Adam Wargal</Typography>
        </CardContent>
        <CardMedia
          style={{ paddingTop: '56.25%' }}
          title="Adam Wargal"
          image={adamWargal}
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Zaczynałem od treningu Taekwondo w 1993 roku na jednym z krakowski osiedli. Jako zawodnik zdobywałem medale
            zawodów ogólnopolskich w Taekwondo oraz Kickboxingu. Posiadam stopień 3 dan Taekwondo oraz 1 dan
            Kickboxing.  Posiadam uprawnienia instruktora dyscyplin: Taekwondo, Kickboxing, Fitness – ćwiczenia
            siłowe oraz uprawnienia trenera dyscypliny: Boks.
          </Typography>

          <Typography variant="body1" gutterBottom>
            Jestem prezesem i głównym trenerem w klubie Instytut Rozwoju Sportu. Biorę udział w przygotowaniach
            zawodników startujących w Boksie, Kickboxingu oraz Taekwondo. Moi podopieczni zdobywali medale
            Mistrzostw Polski, Mistrzostw Europy, Mistrzostw Świata. Jestem absolwentem Collegium Medicum Uniwersytetu
            Jagiellońskiego na kierunku Ratownictwo Medyczne.
          </Typography>

          <Typography variant="body1">
            Podczas studiów trenowałem również Judo w sekcji sportowej CMUJ. Organizowałem obozy oraz zgrupowania
            sportowe.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default Coach;
