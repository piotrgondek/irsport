import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { PlayCircleFilledWhite } from '@mui/icons-material';
import YouTube from 'react-youtube';
import SectionGrid from './SectionGrid';

const Movies = React.forwardRef((_, ref) => {
  const [videoId, setVideoId] = React.useState<string | undefined>();

  const videos = React.useMemo<string[]>(
    () => ['SEQ5EuoYbjg', '-5G9aAxYNVc', 'uJPirDGjdKE', 'OiN01w9Dyds', 'VaQuUCqgTnA', 'sut_mn5XRXk', 'ibcZHeJip_Y'],
    []
  );

  const playVideo = (video: string) => () => {
    setVideoId(video);
  };

  return (
    <Box ref={ref as any}>
      <SectionGrid>
        <Grid container spacing={2}>
          {videos.map((video) => (
            <Grid key={video} item xl={4} md={6} xs={12}>
              <Card>
                {videoId === video ? (
                  <CardContent
                    sx={{
                      height: {
                        xs: '160px',
                        md: '200px',
                      },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 0,
                      '&:last-child': {
                        p: 0,
                      },
                      '> div': {
                        width: 1,
                        height: 1,
                      },
                    }}
                  >
                    <YouTube
                      videoId={video}
                      opts={{
                        width: '100%',
                        height: '100%',
                        playerVars: {
                          autoplay: 1,
                          color: 'white',
                        },
                      }}
                    />
                  </CardContent>
                ) : (
                  <CardMedia
                    onClick={playVideo(video)}
                    image={`//img.youtube.com/vi/${video}/0.jpg`}
                    sx={{
                      backgroundPosition: 'center',
                      backgroundSize: '100%',
                      cursor: 'pointer',
                      height: {
                        xs: '160px',
                        md: '200px',
                      },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <PlayCircleFilledWhite
                      sx={{
                        fontSize: '5rem',
                        color: (theme) => theme.palette.common.white,
                      }}
                    />
                  </CardMedia>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionGrid>
    </Box>
  );
});

export default Movies;
