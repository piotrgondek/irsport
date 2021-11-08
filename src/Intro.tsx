import React from 'react';
import { Box, CardMedia } from '@mui/material';
import intro from './assets/intro.mp4';
import intro2 from './assets/intro2.mp4';

const Intro: React.FC = () => {
  const videos = React.useMemo<Array<string>>(() => [intro, intro2], []);
  const [videoId, setVideoId] = React.useState<number>(0);

  const changeVideo = () => {
    setVideoId((videoId + 1) % 2);
  };

  return (
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
        onEnded={changeVideo}
        src={videos[videoId]}
        autoPlay
        muted
        sx={{
          width: 'auto',
          minWidth: 1,
          minHeight: 1,
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </Box>
  );
};

export default Intro;
