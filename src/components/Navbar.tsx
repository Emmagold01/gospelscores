import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { InputAdornment, OutlinedInput, IconButton } from '@mui/material';
import logo from '../assets/logo.png';
import { Search } from '@mui/icons-material';
import people from '../assets/people.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';

export const Navbar = () => {
  const [input, setInput] = useState('');

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{ py: 1, backgroundColor: '#fff' }}
    >
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left: Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="gospel scores" style={{ height: '50px' }} />
          </Box>

          {/* Middle: Search */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '50%' }}>
            {/* Input */}
            <OutlinedInput
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search song title or artist name"
              sx={{
                width: '100%',
                color: '#2E3192',
                fontFamily: 'Jura, sans-serif',
                '& fieldset': {
                  borderColor: '#2E3192',
                },
                '&:hover fieldset': {
                  borderColor: '#2E3192',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2E3192',
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              }
            />
          </Box>

          {/* Right: Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                fontFamily: 'Jura, sans-serif',
                color: '#ffffff',
                backgroundColor: '#2E3192',
                borderRadius: '10rem',
                paddingX: '1.7rem',
              }}
            >
              Request Score
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                display: 'flex',
                fontFamily: 'Jura, sans-serif',
                color: '#2E3192',
                gap: '7px',
                '& fieldset': {
                  borderColor: '#2E3192',
                },
                borderRadius: '10rem',
              }}
            >
              <img src={people} alt="people" />
              Log in
            </Button>
          </Box>

          <Box sx={{ display: { sx: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="menu" sx={{ mt: '5px' }}>
              <MenuRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
