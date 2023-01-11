/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';

const mock = [
  {
    title: 'High growth potential',
    subtitle:
      'Biotech companies often have a strong focus on research and development, which can lead to significant advancements in medical treatments and therapies. These innovations can result in strong growth for biotech companies and high returns for investors.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns=""
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: 'Long-term investment opportunities',
    subtitle:
      'Biotech companies can take many years to bring new products to market, but once they do, these products can generate significant revenue streams for an extended period of time, offering long-term investment opportunities.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Positive impact on society',
    subtitle:
      'Biotechnology has the ability to improve human health and well-being by developing treatments and cures for diseases. Investing in biotech companies allows investors to not only potentially earn financial returns but also have a positive impact on society.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

const Trucking = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <List disablePadding>
      {mock.map((item, index) => (
        <ListItem
          key={index}
          disableGutters
          data-aos="fade-up"
          data-aos-delay={index * 300}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <ListItemText primary={item.title} secondary={item.subtitle} />
        </ListItem>
      ))}
    </List>
  );

  const RightSide = () => (
    <Box width={1}>
      <Box
        sx={{
          position: 'relative',
          marginX: 'auto',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            marginX: 'auto',
          }}
        >
          <Box>
            <Box
              position={'relative'}
              zIndex={2}
              maxWidth={1}
              height={'auto'}
              sx={{ verticalAlign: 'middle' }}
            >
              <LaptopSkeletonIllustration />
            </Box>
            <Box
              position={'absolute'}
              top={'8.4%'}
              left={'12%'}
              width={'76%'}
              height={'83%'}
              border={`1px solid ${theme.palette.alternate.dark}`}
              zIndex={3}
            >
              <Box
                component={'img'}
                loading="lazy"
                src="https://preview.redd.it/s4y52l8rmix81.png?auto=webp&s=41391667e031ff252d37ba563eb5b0621c4405f0"
                alt="Image Description"
                width={1}
                height={1}
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography variant="h4" align={'center'} sx={{ fontWeight: 700 }}>
            Our Thesis
          </Typography>
        </Box>
        <Typography variant="h6" component="p" align={'center'}>
          We believe that students with strong technical foundations can
          innovate in identifying, analyzing, and supporting high-potential
          biotechs.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <LeftSide />
          </Box>
        </Grid>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <RightSide />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trucking;
