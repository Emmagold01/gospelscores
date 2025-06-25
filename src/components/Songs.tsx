import { Box, Container, Typography } from '@mui/material';
import music from '../assets/music.png';
import musicover from '../assets/musicover.jpeg';
import play from '../assets/play.png';
import IconButton from '@mui/material/IconButton';

type Song = {
  img: string;
  title: string;
  artist: string;
  genre: string;
  scores: string;
  time: number;
};

type SongProps = {
  active: string;
};

export const Songs = ({ active }: SongProps) => {
  const song: Song = {
    img: musicover,
    title: 'Undignified',
    artist: 'Dunsin Oyekan',
    genre: active,
    scores: '3k Scores',
    time: 3,
  };

  const songs = Array(9).fill(song);

  return (
    <Container maxWidth={'xl'}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            sx: '1fr',
            sm: 'repeat(2, 2fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
          paddingBottom: 3,
        }}
      >
        {songs.map((song, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ position: 'relative' }}>
              <img
                src={song.img}
                alt={song.title}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  display: 'block',
                }}
              />

              <IconButton
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'transparent',
                  borderRadius: '50%',
                  p: 1,
                }}
              >
                <img
                  src={play}
                  alt="play"
                  style={{ width: '50px', height: '50px' }}
                />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: '0.6rem',
                paddingTop: 1,
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#5A2B2B',
                  borderRadius: '50%',
                  padding: 1,
                }}
              >
                <img src={music} alt={song.genre} />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      fontFamily: 'jura',
                      fontSize: '20px',
                      fontWeight: '400',
                      color: '#2E3192',
                    }}
                  >
                    {song.title}, {song.artist}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{
                      fontFamily: 'jura',
                      fontSize: '12px',
                      fontWeight: '400',
                      color: '#2E3192',
                    }}
                  >
                    {song.genre}, {song.scores}, {song.time} weeks ago
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
