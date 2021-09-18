import React from 'react';
import './App.css';
import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  createTheme,
  CssBaseline,
  Grid, IconButton, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Toolbar, Typography,
} from '@material-ui/core';
import { Facebook, YouTube } from '@material-ui/icons';
import intro from './assets/intro.mp4';
import adamWargal from './assets/AdamWargal.jpg';
import { days, table, events } from './data/trainings';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start">
          <Facebook />
        </IconButton>
        <IconButton edge="start">
          <YouTube />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Grid container style={{ alignItems: 'stretch' }}>
      <Grid item xs={12}>
        <Card>
          <CardMedia
            component="video"
            src={intro}
            autoPlay
            loop
            muted
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            style={{ paddingTop: '56.25%' }}
            title="Adam Wargal"
            image={adamWargal}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6} className="trener-adam-wargal">
        <Card>
          <CardContent>
            <Typography variant="h2">Adam Wargal</Typography>
            <Typography variant="body1">
              Zaczynał od treningu Taekwondo w 1993 roku na jednym z krakowski osiedli. Jako zawodnik zdobywał medale
              zawodów ogólnopolskich w Taekwondo oraz Kickboxingu. Posiada stopień 3 dan Taekwondo oraz 1 dan
              Kickboxing.  Posiada uprawnienia instruktora dyscyplin: Taekwondo, Kickboxing, Fitness – ćwiczenia
              siłowe oraz uprawnienia trenera dyscypliny: Boks.
            </Typography>

            <Typography variant="body1">
              Jest prezesem i głównym trenerem w klubie Instytut Rozwoju Sportu. Bierze udział w przygotowaniach
              zawodników startujących w Boksie, Kickboxingu oraz Taekwondo. Jego podopieczni zdobywali medale
              Mistrzostw Polski, Mistrzostw Europy, Mistrzostw Świata. Absolwent Collegium Medicum Uniwersytetu
              Jagiellońskiego na kierunku Ratownictwo Medyczne.
            </Typography>

            <Typography variant="body1">
              Podczas studiów trenował również Judo w sekcji sportowej CMUJ. Organizator obozów oraz zgrupowań
              sportowych.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} className="treningi">
        <Card>
          <CardContent>
            <Typography variant="h2">Treningi</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {days.map((day) => <TableCell style={{ width: '1rem' }} key={day}>{day}</TableCell>)}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event}>
                      {days.map((day) => (
                        <TableCell key={day}>{table[day][event]}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </ThemeProvider>
);

export default App;
