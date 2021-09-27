import React from 'react';
import './App.css';
import {
  CssBaseline,
  Paper,
  ThemeProvider,
} from '@mui/material';
import { dark, light } from './themes';
import AppBar from './AppBar';
import Intro from './Intro';
import Coach from './Coach';
import Timetable from './Timetable';
import Cooperation from './Cooperation';
import Movies from './Movies';
import Footer from './Footer';
import Pricing from './Pricing';

interface AppProps {
  autoPlay: boolean
}

const App: React.FC<AppProps> = ({ autoPlay }) => {
  const coachRef = React.useRef<HTMLElement>(null);
  const timetableRef = React.useRef<HTMLElement>(null);
  const moviewsRef = React.useRef<HTMLElement>(null);
  const footerRef = React.useRef<HTMLElement>(null);
  const pricingRef = React.useRef<HTMLElement>(null);

  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <AppBar
        coach={coachRef}
        pricing={pricingRef}
        timetable={timetableRef}
        movies={moviewsRef}
        footer={footerRef}
      />
      <Intro autoPlay={autoPlay} />
      <Coach ref={coachRef} />
      <ThemeProvider theme={light}>
        <Timetable ref={timetableRef} />
      </ThemeProvider>
      <Pricing ref={pricingRef} />
      <ThemeProvider theme={light}>
        <Paper>
          <Movies ref={moviewsRef} />
        </Paper>
      </ThemeProvider>
      <Cooperation />
      <Footer ref={footerRef} />
    </ThemeProvider>
  );
};

export default App;
