import React from 'react';
import {
  CardMedia,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import intro from './assets/intro.mp4';
import { dark } from './themes';
import AppBar from './AppBar';
import Coach from './Coach';
import Timetable from './Timetable';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <CssBaseline />
    <AppBar />
    <CardMedia
      component="video"
      src={intro}
      autoPlay
      loop
      muted
    />
    <Coach />
    <Timetable />
  </ThemeProvider>
);

export default App;
