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

const App: React.FC<AppProps> = ({ autoPlay }) => {
  const coachRef = React.useRef<HTMLElement>(null);
  const timetableRef = React.useRef<HTMLElement>(null);

  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <AppBar
        coach={coachRef}
        timetable={timetableRef}
      />
      <Intro autoPlay={autoPlay} />
      <Coach ref={coachRef} />
      <ThemeProvider theme={light}>
        <Timetable ref={timetableRef} />
      </ThemeProvider>
      <Cooperation />
      <SpeedDial />
    </ThemeProvider>
  );
};

export default App;
