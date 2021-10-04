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
import Map from './Map';

const App: React.FC = () => {
  const coachRef = React.useRef<HTMLElement>(null);
  const timetableRef = React.useRef<HTMLElement>(null);
  const moviewsRef = React.useRef<HTMLElement>(null);
  const footerRef = React.useRef<HTMLElement>(null);
  const pricingRef = React.useRef<HTMLElement>(null);
  const mapRef = React.useRef<HTMLElement>(null);

  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <AppBar
        coach={coachRef}
        pricing={pricingRef}
        timetable={timetableRef}
        movies={moviewsRef}
        footer={footerRef}
        map={mapRef}
      />
      <Intro />
      <Coach ref={coachRef} />
      <ThemeProvider theme={light}>
        <Timetable ref={timetableRef} />
      </ThemeProvider>
      <Pricing ref={pricingRef} />
      <ThemeProvider theme={light}>
        <Paper>
          <Map ref={mapRef} />
        </Paper>
      </ThemeProvider>
      <Movies ref={moviewsRef} />
      <ThemeProvider theme={light}>
        <Paper>
          <Cooperation />
        </Paper>
      </ThemeProvider>
      <Footer ref={footerRef} />
    </ThemeProvider>
  );
};

export default App;
