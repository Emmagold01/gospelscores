import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormGroup,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { ChangeEvent, ReactNode, useState } from 'react';

export const Auth = () => {
  const [currentPage, setCurrentPage] = useState<
    'login' | 'signup' | 'resetpswd'
  >('login');

  const getCurrentPage = (
    page: 'login' | 'signup' | 'resetpswd'
  ): ReactNode => {
    switch (page) {
      case 'login':
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SingUpPage />;
      case 'resetpswd':
        return <ResetPswd />;
      default:
        return <LoginPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        sx={{ maxWidth: 720, minWidth: 500, display: 'flex', p: 4 }}
        elevation={4}
      >
        <Container>
          <ButtonGroup
            fullWidth
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              size="small"
              variant="contained"
              onClick={() => setCurrentPage('login')}
              sx={{
                width: '104px',
                height: '58px',
                backgroundColor:
                  currentPage === 'login' ? '#2E3192' : '#BCBEC0',
                color: currentPage === 'login' ? '#fff' : '#2E3192',
                fontFamily: 'jura',
                borderRadius: 0,
              }}
            >
              Log in
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => setCurrentPage('signup')}
              sx={{
                width: '127px',
                height: '58px',
                fontFamily: 'jura',
                backgroundColor:
                  currentPage === 'signup' ? '#2E3192' : '#BCBEC0',
                color: currentPage === 'signup' ? '#fff' : '#2E3192',
                borderRadius: 0,
              }}
            >
              Sign Up
            </Button>
          </ButtonGroup>
          <Divider sx={{ mb: 5 }} />
          {getCurrentPage(currentPage)}
        </Container>
      </Paper>
    </Box>
  );
};

const LoginPage = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: 'login' | 'signup' | 'resetpswd') => void;
}) => {
  type FormData = { email: string; password: string };
  const [formData, setFormData] = useState<FormData>({} as FormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Box>
      <FormGroup sx={{ mb: 3 }}>
        <FormLabel>Email</FormLabel>
        <TextField
          helperText="Please enter a valid email address"
          label="email"
          type="email"
          fullWidth
          size="small"
          onChange={handleChange}
          error={formData.email === undefined}
        />
      </FormGroup>

      <FormGroup sx={{ mb: 3 }}>
        <FormLabel>Password</FormLabel>
        <TextField
          helperText="Please enter a valid email address"
          label="password"
          type="password"
          fullWidth
          size="small"
          onChange={handleChange}
          error={
            formData.password === undefined || formData.password.length < 8
          }
        />
      </FormGroup>

      <Button
        fullWidth
        sx={{
          bgcolor: '#000',
          color: '#fff',
          fontFamily: 'jura',
        }}
      >
        Login
      </Button>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="1rem"
      >
        <Typography sx={{ fontFamily: 'jura' }}>
          New to Gospel Score?
          <Button
            onClick={() => setCurrentPage('signup')}
            size="small"
            sx={{ textTransform: 'none', color: '#000', fontWeight: '400' }}
          >
            Register
          </Button>
        </Typography>

        <Button
          variant="text"
          onClick={() => setCurrentPage('resetpswd')}
          sx={{
            textTransform: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#000',
            fontWeight: 'light',
            fontFamily: 'jura',
          }}
        >
          Forgot Password
        </Button>
      </Box>

      <Box
        sx={{
          my: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          width: '100%',
        }}
      >
        <Divider sx={{ flex: 1, borderColor: '#000' }} />
        <Typography
          sx={{
            fontFamily: 'Jura, sans-serif',
            color: '#000',
            fontSize: '14px',
          }}
        >
          or Continue with
        </Typography>
        <Divider sx={{ flex: 1, borderColor: '#000' }} />
      </Box>
    </Box>
  );
};

const SingUpPage = () => {
  return (
    <Box>
      <FormLabel>Email</FormLabel>
      <TextField label="email" type="email" />
    </Box>
  );
};

const ResetPswd = () => {
  return (
    <Box>
      <FormLabel>Email</FormLabel>
      <TextField label="email" type="email" />
    </Box>
  );
};
