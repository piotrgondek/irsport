import React from 'react';
import './App.css';
import { CssBaseline, Paper, ThemeProvider } from '@mui/material';
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
import RodoDrawer from './RodoDrawer';
import AppContext from './AppContext';
import reducer, { initState } from './reducer';
import Info from './Info';
import RefsProvider from './common/contexts/RefsContext';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <RefsProvider>
        <ThemeProvider theme={dark}>
          <CssBaseline />
          <AppBar />
          <Intro />
          <Coach />
          <ThemeProvider theme={light}>
            <Timetable />
          </ThemeProvider>
          <Pricing />
          <ThemeProvider theme={light}>
            <Paper>
              <Map />
            </Paper>
          </ThemeProvider>
          <Movies />
          <ThemeProvider theme={light}>
            <Paper>
              <Cooperation />
            </Paper>
          </ThemeProvider>
          <Footer />
          <RodoDrawer />
          <Info />
        </ThemeProvider>
      </RefsProvider>
    </AppContext.Provider>
  );
};

export default App;
