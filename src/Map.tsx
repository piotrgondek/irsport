import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import SelectionGrid from './SectionGrid';

const MapWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyBQBLIXaLT-KEO35rsZ9KShhJEX5-1ZTuo',
})(({ google }) => (
  <Map
    google={google}
    zoom={21}
    containerStyle={{
      position: 'relative',
      width: '100%',
      height: '75vh',
    }}
    style={{
      width: '100%',
      height: '100%',
    }}
    initialCenter={{
      lat: 50.07583557437312,
      lng: 19.930395333048864,
    }}
  />
));

const MapContainer = React.forwardRef((_, ref) => (
  <Box ref={ref as any}>
    <SelectionGrid>
      <Typography variant="h2">ul. Wrocławska 11a Kraków</Typography>
      <MapWrapper />
    </SelectionGrid>
  </Box>
));

export default MapContainer;
