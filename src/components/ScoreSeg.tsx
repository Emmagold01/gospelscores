import { useState } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { Box, TextField, Autocomplete, FormControlLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface ScoreSegProps {
  id: number;
  onDelete: (id: number) => void;
}

export const ScoreSeg = ({ id, onDelete }: ScoreSegProps) => {
  const [segmentType, setSegmentType] = useState<string[]>([]);
  const [mark, setMark] = useState<boolean>(false);

  const instrumentOptions = ['Keyboard', 'Bass', 'Drums'];
  const vocalOptions = ['Tenor', 'Alto', 'Soprano'];

  const hasSelectedSegmentType =
    Array.isArray(segmentType) && segmentType.length > 0;

  return (
    <Box
      component="form"
      sx={{ pt: 7, width: { xs: '100%', sm: '90%' }, mx: 'auto' }}
    >
      <Autocomplete
        multiple
        options={['Instrumental', 'Vocal']}
        value={segmentType}
        onChange={(_, val) => setSegmentType(val)}
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label={hasSelectedSegmentType ? '' : 'Choose Segment Type'}
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
        )}
      />

      {segmentType.length === 1 && (
        <Autocomplete
          multiple
          options={
            segmentType[0] === 'Instrumental' ? instrumentOptions : vocalOptions
          }
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose Segment"
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
          )}
        />
      )}

      <TextField
        fullWidth
        size="small"
        name="video"
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
        name="score"
        label="Upload Score Sheet"
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

      <Box
        sx={{
          display: 'flex',
          fontFamily: 'jura',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'none',
          color: '#000',
        }}
      >
        <FormControlLabel
          control={<Checkbox checked={mark} onChange={() => setMark(!mark)} />}
          label="Mark as premium"
          sx={{ fontFamily: 'jura' }}
        />
      </Box>

      {id !== 0 && (
        <IconButton
          onClick={() => onDelete(id)}
          sx={{ position: 'absolute', top: 20, right: 20 }}
        >
          <DeleteIcon sx={{ color: 'black' }} />
        </IconButton>
      )}
    </Box>
  );
};
