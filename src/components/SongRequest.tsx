import {
  Box,
  Paper,
  Container,
  Typography,
  Divider,
  TextField,
  Button,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import IOSSwitch from './IOSSwitch';

export const SongRequest = () => {
  const [useAudioFile, setUseAudioFile] = useState(false);

  type SongData = {
    title: string;
    artist: string;
    url: string;
  };
  const [songData, setSongData] = useState<SongData>({} as SongData);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const key = e.target.name;
    const value = e.target.value;
    setSongData({ ...songData, [key]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper elevation={4} sx={{ width: '717px', height: '619px' }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '20px', sm: '40px' },
              fontFamily: 'jura',
              fontWeight: '700',
              textTransform: 'none',
              pt: 5,
              color: '#2e3192',
            }}
          >
            Request Song Score
          </Typography>
          <Divider sx={{ width: '90%', mx: 'auto' }} />

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ pt: 7, width: { xs: '100%', sm: '90%' }, mx: 'auto' }}
          >
            <TextField
              fullWidth
              size="small"
              type="text"
              name="title"
              placeholder="Song Title"
              onChange={handleChange}
              sx={{
                '& fieldset': { borderColor: '#000' },
                mb: 6,
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'inherit',
                  },
                },
              }}
            />

            <TextField
              fullWidth
              size="small"
              type="text"
              name="artist"
              placeholder="Song Artist"
              onChange={handleChange}
              sx={{
                '& fieldset': { borderColor: '#000' },
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'inherit',
                  },
                },
              }}
            />

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mt: 3,
              }}
            >
              <Typography fontFamily="jura">Audio File</Typography>
              <IOSSwitch
                checked={useAudioFile}
                onChange={() => setUseAudioFile(!useAudioFile)}
              />
              <Typography fontFamily="jura">From Url</Typography>
            </Box>

            <TextField
              fullWidth
              size="small"
              type="text"
              name="url"
              placeholder="Paste Url"
              onChange={handleChange}
              sx={{
                '& fieldset': { borderColor: '#000' },
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'inherit',
                  },
                },
              }}
            />
            <Typography
              fontSize="12px"
              color="#ADA8A8"
              fontFamily="jura"
              textAlign="center"
              mt={0.5}
            >
              Please note that requested song scores might take 2 week to be
              fully processsed.
            </Typography>

            <Button
              type="submit"
              fullWidth
              sx={{
                fontWeight: '600',
                color: 'white',
                fontFamily: 'jura',
                bgcolor: '#2E3192',
                textTransform: 'none',
                mt: 5,
              }}
            >
              Request Song Score
            </Button>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};
