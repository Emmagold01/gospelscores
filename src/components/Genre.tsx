import { Box, Button, Container } from '@mui/material';

type GenreProps = {
  active: string;
  setActive: (genre: string) => void;
};

export const Genre = ({ active, setActive }: GenreProps) => {
  const genres = [
    'Contemporary Songs',
    'Classicals',
    'Worships',
    'Reggae',
    'Hip Hop',
    'Praise',
    'Rock',
    'Nigerian',
    'Ghanian',
    'English',
    'Yoruba',
    'Igbo',
    'South Africa',
    'American',
  ];

  return (
    <Container maxWidth={'xl'}>
      <Box
        fontSize={2}
        sx={{
          py: 2,
          display: 'flex',
          gap: '10px',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {genres.map((genre) => (
          <Button
            key={genre}
            onClick={() => setActive(genre)}
            variant="contained"
            sx={{
              backgroundColor: active === genre ? '#2E3192' : '#707070',
              color: '#fff',
              fontSize: '12px',
              fontFamily: 'jura',
              paddingX: '20px',
              paddingY: '8px',
              minWidth: 'fit-content',
              textTransform: 'none',
              whiteSpace: 'nowrap',
              '&:hover': {
                backgroundColor: active === genre ? '#2E3192' : '#707070',
              },
            }}
          >
            {genre}
          </Button>
        ))}
      </Box>
    </Container>
  );
};
