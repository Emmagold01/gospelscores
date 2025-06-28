import { Box, TextField, Button, Autocomplete } from '@mui/material';
import { ScorePage } from './UploadScore';

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<ScorePage>>;
};

export const ScoreInfo = ({ setCurrentPage }: Props) => {
  return (
    <Box
      component="form"
      sx={{ pt: 7, width: { xs: '100%', sm: '90%' }, mx: 'auto' }}
    >
      <TextField
        fullWidth
        size="small"
        name="title"
        label="Song Title"
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

      <Autocomplete
        multiple
        options={['Dunsin Oyekan']}
        disableCloseOnSelect
        renderInput={(params) => {
          const hasSelected =
            Array.isArray(params.InputProps?.startAdornment) &&
            params.InputProps.startAdornment.length > 0;

          return (
            <TextField
              {...params}
              label={hasSelected ? '' : 'Song Artist'}
              size="small"
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
          );
        }}
      />

      <Autocomplete
        multiple
        options={['Classical']}
        disableCloseOnSelect
        renderInput={(params) => {
          const hasSelected =
            Array.isArray(params.InputProps?.startAdornment) &&
            params.InputProps.startAdornment.length > 0;

          return (
            <TextField
              {...params}
              label={hasSelected ? '' : 'Select Genre'}
              size="small"
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
          );
        }}
      />

      <Autocomplete
        multiple
        options={['Gospel']}
        disableCloseOnSelect
        renderInput={(params) => {
          const hasSelected =
            Array.isArray(params.InputProps?.startAdornment) &&
            params.InputProps.startAdornment.length > 0;

          return (
            <TextField
              {...params}
              label={hasSelected ? '' : 'Category'}
              size="small"
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
          );
        }}
      />

      <Autocomplete
        multiple
        options={['2025']}
        disableCloseOnSelect
        renderInput={(params) => {
          const hasSelected =
            Array.isArray(params.InputProps?.startAdornment) &&
            params.InputProps.startAdornment.length > 0;

          return (
            <TextField
              {...params}
              label={hasSelected ? '' : 'Year of Release'}
              size="small"
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
          );
        }}
      />

      <Button
        onClick={() => setCurrentPage(ScorePage.MAINSCORE)}
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
