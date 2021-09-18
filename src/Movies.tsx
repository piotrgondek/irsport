import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import YouTube from 'react-youtube';

const videos = [
  'uJPirDGjdKE',
  'OiN01w9Dyds',
  'VaQuUCqgTnA',
  'sut_mn5XRXk',
  'ibcZHeJip_Y',
].map((video) => (
  <Grid
    item
    xs={12}
    sx={{
      textAlign: 'center',
    }}
  >
    <YouTube
      videoId={video}
      opts={{
        width: '1000vw',
        // height: '100',
      }}
    />
  </Grid>
));

const Movies: React.FC = () => (
  <>
    <Typography variant="h2">YouTube</Typography>
    <Grid
      rowSpacing={2}
      container
      justifyContent="space-around"
      alignItems="stretch"
    >
      {videos}
    </Grid>
  </>
);

export default Movies;
