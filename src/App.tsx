import React from 'react';
import './App.css';
import {
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { dark, light } from './themes';
import AppBar from './AppBar';
import Intro from './Intro';
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
    <Intro autoPlay={autoPlay} />
    <Coach />
    <ThemeProvider theme={light}>
      <Timetable />
    </ThemeProvider>
    <Cooperation />
    <SpeedDial />
  </ThemeProvider>
);

export default App;
