import { Box, TextField, Button } from '@mui/material';
import { ScorePage } from './UploadScore';

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<ScorePage>>;
};

export const MainScore = ({ setCurrentPage }: Props) => {
  return (
    <Box
      component="form"
      sx={{ pt: 7, width: { xs: '100%', sm: '90%' }, mx: 'auto' }}
    >
      <TextField
        label="Description"
        multiline
        rows={4}
        fullWidth
        placeholder="Type something here..."
        sx={{
          '& fieldset': { borderColor: '#000' },
          mb: 5,
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
        name="title"
        label="Upload Video"
        sx={{
          '& fieldset': { borderColor: '#000' },
          mb: 5,
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
        name="title"
        label="Upload Thumbnails"
        sx={{
          '& fieldset': { borderColor: '#000' },
          mb: 5,
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'inherit',
            },
          },
        }}
      />

      <Button
        onClick={() => setCurrentPage(ScorePage.SOCRESEGMENT)}
        type="submit"
        fullWidth
        sx={{
          fontWeight: '600',
          color: 'white',
          fontFamily: 'jura',
          bgcolor: '#2E3192',
          textTransform: 'none',
        }}
      >
        Next
      </Button>
    </Box>
  );
};
