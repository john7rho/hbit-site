import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, createTheme } from '@mui/material/styles';

import Container from 'components/Container';

const Hero = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#009b4c',
      },
      secondary: {
        main: '#18795b',
      },
    },
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Box marginBottom={2}>
        <Typography variant="h2" color="#009b4c" sx={{ fontWeight: 700 }}>
          Demystifying{' '}
        </Typography>
        <Typography
          color={'#5bb462'}
          component={'span'}
          variant="h2"
          fontWeight={700}
          sx={{
            background: `linear-gradient(180deg, transparent 82%, ${alpha(
              '#8fd974',
              0.3,
            )} 0%)`,
          }}
        >
          biotech.
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          Exploring innovation, entrepreneurship, and growth opportunities
          within Boston's medical hub.
        </Typography>
      </Box>
    </Box>
  );

  const RightSide = () => {
    return (
      <Box
        sx={{
          height: { xs: 'auto', md: 1 },
          '& img': {
            objectFit: 'cover',
          },
        }}
      >
        <Box
          component={'img'}
          loading="lazy"
          src={
            'https://upload.wikimedia.org/wikipedia/commons/f/fb/Back_Bay_and_Charles_River%2C_Boston%2C_MA.jpg'
          }
          height={{ xs: 'auto', md: 1 }}
          maxHeight={{ xs: 300, md: 1 }}
          width={1}
          maxWidth={1}
        />
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
          minHeight={{ md: 600 }}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display={'flex'}
            alignItems={'center'}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
              // sx={{
              //   width: '100%',
              //   height: '100%',
              //   overflow: 'hidden',
              // }}
              >
                <Box
                // sx={{
                //   overflow: 'hidden',
                //   left: '0%',
                //   width: 1,
                //   height: 1,
                //   position: { xs: 'relative', md: 'absolute' },
                //   clipPath: {
                //     xs: 'none',
                //     md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                //   },
                //   shapeOutside: {
                //     xs: 'none',
                //     md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                //   },
                // }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Hero;
