import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { ReactNode, useState } from 'react';
import { ScoreInfo } from './ScoreInfo';
import { MainScore } from './MainScore';
import { ScoreSeg } from './ScoreSeg';
import { Add } from '@mui/icons-material';

export enum ScorePage {
  SCOREINFO,
  MAINSCORE,
  SOCRESEGMENT,
}

export const UploadScore = () => {
  const [currentPage, setCurrentPage] = useState<ScorePage>(
    ScorePage.SCOREINFO
  );

  const getCurrentPage = (page: ScorePage): ReactNode => {
    switch (page) {
      case ScorePage.SCOREINFO:
        return <ScoreInfo setCurrentPage={setCurrentPage} />;
      case ScorePage.MAINSCORE:
        return <MainScore setCurrentPage={setCurrentPage} />;
      case ScorePage.SOCRESEGMENT:
        return <ScoreSeg />;
      default:
        return <ScoreInfo setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>
        <Paper elevation={4} sx={{ width: '900px', my: 5, py: 5, mb: 2 }}>
          <Container maxWidth="md">
            <Box sx={{ width: '90%', mx: 'auto' }}>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '20px', sm: '40px' },
                  fontFamily: 'jura',
                  fontWeight: '700',

                  color: '#2e3192',
                }}
              >
                Song Score Upload
              </Typography>
              <Divider sx={{ width: '70%', mx: 'auto' }} />

              <Box
                sx={{
                  pt: 3,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button
                  onClick={() => setCurrentPage(ScorePage.SCOREINFO)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: '#2e3192',
                    }}
                  >
                    1
                  </Avatar>
                  <Typography
                    sx={{
                      fontFamily: 'jura',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#000',
                      textTransform: 'none',
                    }}
                  >
                    Score Info
                  </Typography>
                </Button>

                <Divider sx={{ width: '30%', mb: 3 }} />

                <Button
                  onClick={() => setCurrentPage(ScorePage.MAINSCORE)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        currentPage === ScorePage.MAINSCORE ||
                        currentPage === ScorePage.SOCRESEGMENT
                          ? '#2e3192'
                          : '#ADA8A8',
                    }}
                  >
                    2
                  </Avatar>
                  <Typography
                    sx={{
                      fontFamily: 'jura',
                      fontSize: '12px',
                      fontWeight: '700',
                      color:
                        currentPage === ScorePage.MAINSCORE ||
                        currentPage === ScorePage.SOCRESEGMENT
                          ? '#000'
                          : '#ADA8A8',
                      textTransform: 'none',
                    }}
                  >
                    Main Score
                  </Typography>
                </Button>

                <Divider sx={{ width: '30%', mb: 3 }} />

                <Button
                  onClick={() => setCurrentPage(ScorePage.SOCRESEGMENT)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        currentPage === ScorePage.SOCRESEGMENT
                          ? '#2e3192'
                          : '#ADA8A8',
                    }}
                  >
                    3
                  </Avatar>
                  <Typography
                    sx={{
                      fontFamily: 'jura',
                      fontSize: '12px',
                      fontWeight: '700',
                      color:
                        currentPage === ScorePage.SOCRESEGMENT
                          ? '#000'
                          : '#ADA8A8',
                      textTransform: 'none',
                    }}
                  >
                    Score Segment
                  </Typography>
                </Button>
              </Box>
            </Box>

            {currentPage === ScorePage.SOCRESEGMENT && (
              <Box mt={2} display="flex" justifyContent="center" mr={3.5}>
                <IconButton
                  title="Add new Score Info"
                  color="success"
                  size="large"
                  sx={{
                    bgcolor: 'green',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#45a049',
                    },
                  }}
                >
                  <Add />
                </IconButton>
              </Box>
            )}
          </Container>
        </Paper>

        <Paper
          elevation={4}
          sx={{ width: '900px', my: 10, py: 10, mb: 3, position: 'relative' }}
        >
          <Container maxWidth="md">{getCurrentPage(currentPage)}</Container>
        </Paper>
      </Box>
    </Box>
  );
};
