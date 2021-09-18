import React from 'react';
import {
  CardMedia,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import intro from './assets/intro.mp4';
import { dark, light } from './themes';
import AppBar from './AppBar';
import Coach from './Coach';
import Timetable from './Timetable';
import Cooperation from './Cooperation';
import SpeedDial from './SpeedDial';

interface AppProps {
  autoPlay: boolean
}

const App: React.FC<AppProps> = ({ autoPlay }) => (
  <ThemeProvider theme={dark}>
    <CssBaseline />
    <AppBar />
    <CardMedia
      component="video"
      src={intro}
      autoPlay={autoPlay}
      loop
      muted
    />
    <Coach />
    <ThemeProvider theme={light}>
      <Timetable />
    </ThemeProvider>
    <Cooperation />
    <SpeedDial />
  </ThemeProvider>
);

export default App;
