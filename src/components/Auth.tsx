import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import google from '../assets/google.png';
import { ArrowBack } from '@mui/icons-material';

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
        return <SingUpPage setCurrentPage={setCurrentPage} />;
      case 'resetpswd':
        return <ResetPswd setCurrentPage={setCurrentPage as any} />;
      default:
        return <LoginPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      my="2rem"
    >
      <Paper
        sx={{
          maxWidth: 720,
          minWidth: { xs: '90%', sm: 500 },
          display: 'flex',
          p: 4,
        }}
        elevation={4}
      >
        <Container>
          {currentPage === 'resetpswd' ? (
            <Typography
              sx={{
                color: '#2E3192',
                fontFamily: 'jura',
                fontWeight: '700',
                fontSize: '40px',
                textAlign: 'center',
              }}
            >
              Reset Password
            </Typography>
          ) : (
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
          )}

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
        <TextField
          helperText="Please enter a valid email address"
          label="Email"
          type="email"
          name="email"
          fullWidth
          size="small"
          onChange={handleChange}
          error={formData.email === undefined}
        />
      </FormGroup>

      <FormGroup sx={{ mb: 3 }}>
        <TextField
          helperText="Please enter a valid password"
          label="Password"
          type="password"
          name="password"
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

      <Box
        sx={{
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            gap: 2,
            textTransform: 'none',
            p: 2,
            bgcolor: '#fff',
            color: '#4200FF',
          }}
        >
          <img src={google} alt="google" />
          <Typography sx={{ fontFamily: 'jura' }}>
            Continue with Google
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

const SingUpPage = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: 'login' | 'signup' | 'resetpswd') => void;
}) => {
  type FormData = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    code: number;
  };
  const [formData, setFormData] = useState<FormData>({} as FormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Box>
      <FormGroup sx={{ mb: 3 }}>
        <TextField
          label="FirstName"
          type="text"
          name="firstName"
          fullWidth
          size="small"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup sx={{ mb: 3 }}>
        <TextField
          label="LastName"
          type="text"
          name="lastName"
          fullWidth
          size="small"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup sx={{ mb: 3 }}>
        <TextField
          label="Email"
          type="email"
          name="email"
          fullWidth
          size="small"
          onChange={handleChange}
          helperText="Please enter a valid email"
          error={formData.email === undefined}
        />
      </FormGroup>

      <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
        <TextField
          label="Enter verification code"
          type="password"
          name="code"
          size="small"
          onChange={handleChange}
          helperText="Please enter the code"
          error={formData.code === undefined}
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: '#2E3192',
            color: '#fff',
            fontSize: '12px',
            fontFamily: 'jura',
            px: '20px',
            minWidth: 'fit-content',
            textTransform: 'none',
            whiteSpace: 'nowrap',
            height: '40px',
          }}
        >
          Get Code
        </Button>
      </Box>

      <FormGroup sx={{ mb: 3 }}>
        <TextField
          helperText="Please enter a valid password"
          label="Password"
          type="password"
          name="password"
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
        Create Account
      </Button>

      <Box
        my="2rem"
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
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
            fontSize: '14px',
          }}
          color="primary"
        >
          or Continue with
        </Typography>
        <Divider sx={{ flex: 1, borderColor: '#000' }} />
      </Box>

      <Box
        sx={{
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            gap: 2,
            textTransform: 'none',
            p: 2,
            bgcolor: '#fff',
            color: '#4200FF',
          }}
        >
          <img src={google} alt="google" />
          <Typography sx={{ fontFamily: 'jura' }}>
            Continue with Google
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

const ResetPswd = (props: {
  setCurrentPage: Dispatch<SetStateAction<'login'>>;
}) => {
  type FormData = { email: string; password: string; code: number };
  const [formData, setFormData] = useState<FormData>({} as FormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Box>
      <FormGroup sx={{ mb: 3 }}>
        <TextField
          helperText="Please enter a valid email address"
          label="Email"
          type="email"
          name="email"
          fullWidth
          size="small"
          onChange={handleChange}
          error={formData.email === undefined}
        />
      </FormGroup>

      <FormGroup sx={{ mb: 3 }}>
        <TextField
          helperText="Please enter a valid password"
          label="Password"
          type="password"
          name="password"
          fullWidth
          size="small"
          onChange={handleChange}
          error={
            formData.password === undefined || formData.password.length < 8
          }
        />
      </FormGroup>

      <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
        <TextField
          label="Enter verification code"
          type="password"
          name="code"
          size="small"
          onChange={handleChange}
          helperText="Please enter the code"
          error={formData.code === undefined}
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: '#2E3192',
            color: '#fff',
            fontSize: '12px',
            fontFamily: 'jura',
            px: '20px',
            minWidth: 'fit-content',
            textTransform: 'none',
            whiteSpace: 'nowrap',
            height: '40px',
          }}
        >
          Get Code
        </Button>
      </Box>

      <Button
        fullWidth
        sx={{
          bgcolor: '#000',
          color: '#fff',
          fontFamily: 'jura',
        }}
      >
        Reset Password
      </Button>

      <Box
        sx={{
          my: 3,
          gap: 2,
          width: '100%',
        }}
      >
        <Button
          startIcon={<ArrowBack />}
          onClick={() => props.setCurrentPage('login')}
          fullWidth
          sx={{ color: '#2E3192', fontFamily: 'jura' }}
        >
          Back to LOGIN
        </Button>
      </Box>
    </Box>
  );
};
