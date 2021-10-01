/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import SelectionGrid from './SectionGrid';

const Map = React.forwardRef((_, ref) => {
  const [, setMap] = React.useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBQBLIXaLT-KEO35rsZ9KShhJEX5-1ZTuo',
  });

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return (
    <Box ref={ref as any}>
      <SelectionGrid>
        <Typography variant="h2">ul. Wrocławska 11a Kraków</Typography>
        {isLoaded ? (
          <Box
            sx={{
              height: '70vh',
            }}
          >
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '100%',
              }}
              center={{
                lat: 50.07583557437312,
                lng: 19.930395333048864,
              }}
              zoom={21}
              onLoad={onLoad}
              onUnmount={onUnmount}
            />
          </Box>
        ) : <></>}
      </SelectionGrid>
    </Box>
  );
});

export default React.memo(Map);
