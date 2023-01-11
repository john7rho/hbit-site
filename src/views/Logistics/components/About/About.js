/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box bgcolor={'#0c133e'}>
      <Container paddingY={{ xs: 4, sm: 6, md: '0 !important' }}>
        <Grid container spacing={isMd ? 0 : 2}>
          <Grid
            item
            container
            alignItems={'center'}
            xs={12}
            md={12}
            data-aos="fade-up"
          >
            <Container paddingLeft={'0 !important'}>
              <Box>
                <Box marginBottom={2}>
                  <Typography
                    sx={{
                      textTransform: 'uppercase',
                      fontWeight: 'medium',
                      color: 'common.white',
                    }}
                  ></Typography>
                </Box>
                <Box marginBottom={2}>
                  <Typography
                    component={'span'}
                    variant="h4"
                    sx={{ fontWeight: 700, color: 'common.white' }}
                  >
                    Boiling down biotech to its fundamentals.
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ color: 'common.white' }}
                >
                  Biotechnology companies tend to be blackboxes for student
                  investors, due to scientific complexity, long development
                  timelines, and regulatory complexity.
                  <br />
                  HBIT aims to leverage fundamental and technical analysis to
                  provide a more transparent view of the biotech industry.
                </Typography>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
