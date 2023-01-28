import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// this is the right footer
const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
          ></Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="mailto:john.rho@cashclubcorp.org"
                size="small"
              >
                Contact Us
              </Button>
            </Box>
            <Box marginTop={1} marginLeft={1}>
              <Button
                color="primary"
                variant="outlined"
                component="a"
                target="blank"
                href="https://forms.gle/QFdodYrU4MU5SAjk9"
                size="small"
              >
                Join Mailing List
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Harvard Undergraduate Bio Investment Team. 2023. All rights
          reserved.
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          Investing with a purpose.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
