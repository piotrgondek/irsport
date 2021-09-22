import React from 'react';
import {
  Box,
  CardMedia,
} from '@mui/material';
import intro from './assets/intro.mp4';

interface IntroProps {
  autoPlay: boolean
}

const Intro: React.FC<IntroProps> = ({ autoPlay }) => (
  <Box
    sx={{
      position: 'relative',
      padding: '0',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    <CardMedia
      component="video"
      src={intro}
      autoPlay={autoPlay}
      loop
      muted
      sx={{
        width: 'auto',
        minWidth: '100%',
        minHeight: '100%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  </Box>
);

export default Intro;
