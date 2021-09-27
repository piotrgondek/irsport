import React from 'react';
import {
  Box,
  Grid,
  useMediaQuery,
} from '@mui/material';
import YouTube from 'react-youtube';
import SectionGrid from './SectionGrid';
import { dark } from './themes';

const Movies = React.forwardRef((_, ref) => {
  const md = useMediaQuery(dark.breakpoints.up('md'));

  const videos = React.useMemo<string[]>(
    () => [
      'SEQ5EuoYbjg',
      '-5G9aAxYNVc',
      'uJPirDGjdKE',
      'OiN01w9Dyds',
      'VaQuUCqgTnA',
      'sut_mn5XRXk',
      'ibcZHeJip_Y',
    ],
    [],
  );

  return (
    <Box
      className="irs-filmy"
      ref={ref as any}
    >
      <SectionGrid>
        <Grid
          container
          spacing={2}
        >
          {videos.map((video) => (
            <Grid
              key={video}
              item
              md={6}
              xs={12}
            >
              <YouTube
                videoId={video}
                opts={{
                  width: '100%',
                  height: md ? '200px' : '160px',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </SectionGrid>
    </Box>
  );
});

export default Movies;
