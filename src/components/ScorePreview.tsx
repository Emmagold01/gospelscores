import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import musicover from '../assets/musicover.jpeg';
// import music from '../assets/music.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import musicSheet from '../assets/sheets.png';

import { useState } from 'react';
import { Audiotrack } from '@mui/icons-material';

type Vocals = {
  img: string;
  title: string;
  artist: string;
  vocal: string;
};

export const ScorePreview = () => {
  const localTheme = createTheme({
    palette: {
      primary: {
        main: '#2E3192',
      },
    },
  });

  const vocals: Vocals[] = [
    {
      img: musicover,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Soprano',
    },
    {
      img: musicover,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Alto',
    },
    {
      img: musicover,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Tenor',
    },
    {
      img: musicover,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Bass',
    },
    {
      img: musicover,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Soprano',
    },
    {
      img: musicover,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Alto',
    },
    {
      img: musicover,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Tenor',
    },
    {
      img: musicover,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Bass',
    },
  ];

  const sheets: Vocals[] = [
    {
      img: musicSheet,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'All parts',
    },
    {
      img: musicSheet,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Alto',
    },
    {
      img: musicSheet,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Tenor',
    },
    {
      img: musicSheet,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Bass',
    },
    {
      img: musicSheet,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Soprano',
    },
    {
      img: musicSheet,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Alto',
    },
    {
      img: musicSheet,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Tenor',
    },
    {
      img: musicSheet,
      title: 'Undignified',
      artist: 'Dunsin Oyekan',
      vocal: 'Bass',
    },
  ];

  //   const vocal: Vocals = {
  //     img: musicover,
  //     title: 'Undignified',
  //     artist: 'Dunsin Oyekan',
  //     vocal: 'Soprano',
  //   };

  //   const vocals = Array(10).fill(vocal);

  //   const sheet: Vocals = {
  //     img: musicSheet,
  //     title: 'Undignified',
  //     artist: 'Dunsin Oyekan',
  //     vocal: 'All Parts',
  //   };

  //   const sheets = Array(10).fill(sheet);

  const [selectedVocal, setSelectedVocal] = useState<Vocals | null>(null);
  const [enlarged, setEnlarged] = useState<boolean>(false);

  return (
    <ThemeProvider theme={localTheme}>
      <Container maxWidth="xl" sx={{ height: '70vh', py: 4, boxShadow: 4 }}>
        <Box display="flex" gap="3" height="100%">
          <Box
            sx={{
              width: '70%',
              pr: 2,
              overflowY: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <>
              {selectedVocal ? (
                <Box sx={{ width: '100%', height: '100%' }}>
                  <Box
                    sx={{
                      position: enlarged ? 'fixed' : 'relative',
                      top: enlarged ? 0 : 'auto',
                      left: enlarged ? 0 : 'auto',
                      width: enlarged ? '100vw' : '100%',
                      height: enlarged ? '100vh' : '100%',
                      zIndex: enlarged ? 9999 : 'auto',
                    }}
                  >
                    <img
                      src={selectedVocal.img}
                      alt={selectedVocal.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: enlarged ? 0 : '8px',
                      }}
                    />

                    <Button
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                      }}
                    >
                      {/* Replace with your icon */}
                      <PlayCircleFilledTwoToneIcon
                        sx={{ fontSize: 80, color: 'white' }}
                      />
                    </Button>

                    <Button
                      onClick={() => setEnlarged(!enlarged)}
                      sx={{ position: 'absolute', right: 0, bottom: 3 }}
                    >
                      {enlarged ? (
                        <ZoomInMapIcon sx={{ fontSize: 20, color: 'white' }} />
                      ) : (
                        <ZoomOutMapIcon sx={{ fontSize: 20, color: 'white' }} />
                      )}
                    </Button>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box>
                      <Typography
                        variant="body1"
                        color="primary"
                        sx={{
                          fontFamily: 'jura',
                          fontSize: '40px',
                          fontWeight: '400',
                        }}
                      >
                        {selectedVocal.title}, {selectedVocal.artist}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{
                          fontFamily: 'jura',
                          fontSize: '20px',
                          fontWeight: '400',
                        }}
                      >
                        {selectedVocal.vocal}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography fontFamily="jura" textAlign="center">
                    Select a vocal to preview
                  </Typography>
                </Box>
              )}
            </>
          </Box>

          <Box
            sx={{
              width: '30%',
              overflowY: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <Box sx={{ width: '100%', px: 5, boxSizing: 'border-box' }}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  gap: '0.6rem',
                }}
              >
                <Avatar sx={{ bgcolor: '#5A2B2B' }}>
                  <Audiotrack />
                </Avatar>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box>
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{
                        fontFamily: 'jura',
                        fontSize: '20px',
                        fontWeight: '400',
                      }}
                    >
                      Undignified, Dunsin Oyekan
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{
                        fontFamily: 'jura',
                        fontSize: '12px',
                        fontWeight: '400',
                      }}
                    >
                      Contemporary Songs, 3k Scores, 3 weeks ago
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {vocals.map((vocal, index) => (
                  <Button
                    key={index}
                    disableRipple
                    onClick={() => setSelectedVocal(vocal)}
                    sx={{
                      p: 0,
                      textAlign: 'left',
                      justifyContent: 'flex-start',
                      '&:hover': {
                        transform: 'scale(1.01)',
                        boxShadow: 2,
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center',
                        width: '100%',
                        padding: '8px',
                      }}
                    >
                      <img
                        src={vocal.img}
                        alt={vocal.title}
                        width="161px"
                        height="83px"
                        style={{
                          objectFit: 'cover',
                          borderRadius: '5px',
                        }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <Typography
                          fontSize="20px"
                          fontWeight={700}
                          fontFamily="jura"
                          textTransform="none"
                          color="primary"
                        >
                          {vocal.vocal}
                        </Typography>
                        <Typography
                          fontFamily="jura"
                          textTransform="none"
                          fontSize="12px"
                          color="primary"
                        >
                          {vocal.title}
                        </Typography>
                        <Typography
                          fontFamily="jura"
                          textTransform="none"
                          fontSize="12px"
                          color="primary"
                        >
                          {vocal.artist}
                        </Typography>
                      </Box>
                    </Box>
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ py: 2, boxShadow: 4 }}>
        <Typography
          variant="body1"
          color="primary"
          sx={{
            fontFamily: 'jura',
            fontSize: '40px',
            fontWeight: '700',
          }}
        >
          Score Sheets
        </Typography>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {sheets.map((sheet) => (
            <Button sx={{ minWidth: 'max-content' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  boxShadow: 2,
                  p: 2,
                  borderRadius: 3,
                }}
              >
                <img src={sheet.img} alt={sheet.title} />

                <Box sx={{ textTransform: 'none' }}>
                  <Typography
                    fontFamily="jura"
                    fontSize="16px"
                    fontWeight="700"
                  >
                    {sheet.title}
                  </Typography>
                  <Typography fontFamily="jura" fontSize="12px">
                    {sheet.artist}
                  </Typography>
                  <Typography fontFamily="jura" fontSize="12px">
                    {sheet.vocal}
                  </Typography>
                </Box>
              </Box>
            </Button>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
};
