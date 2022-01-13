import React from 'react';
import { Box, Typography } from '@mui/material';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useTranslation } from 'react-i18next';
import SelectionGrid from './SectionGrid';
import useRefs from './common/hooks/useRefs';

const MapWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyBQBLIXaLT-KEO35rsZ9KShhJEX5-1ZTuo',
})(({ google }) => (
  <Map
    google={google}
    containerStyle={{
      position: 'relative',
      width: '100%',
      height: '70vh',
    }}
    style={{
      width: '100%',
      height: '100%',
    }}
    initialCenter={{
      lat: 50.07583557437312,
      lng: 19.930395333048864,
    }}
    {...{ zoom: 21 }}
  >
    <Marker />
  </Map>
));

const MapContainer: React.FC = () => {
  const { t } = useTranslation();
  const { mapRef } = useRefs();

  return (
    <Box ref={mapRef}>
      <SelectionGrid>
        <Typography variant="h4">{t('contact.address')}</Typography>
        <MapWrapper />
      </SelectionGrid>
    </Box>
  );
};

export default MapContainer;
