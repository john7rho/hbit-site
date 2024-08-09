import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import hubitLogo from '../../../../assets/hubit_logo.png';

const Topbar = ({ onSidebarOpen }) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 150, md: 200 }}
      >
        <Box component={'img'} src={hubitLogo} height={1} width={1}></Box>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <Link
            color="#009b4c"
            href="/"
            underline="none"
            sx={{ textDecoration: 'null' }}
          >
            Home
          </Link>
        </Box>
        {/* TODO: Fix up the about page once we have a club photo */}
        {/* <Box marginLeft={4}>
          <Link
            color="#009b4c"
            href="/about"
            underline="none"
            sx={{ textDecoration: 'null' }}
          >
            About
          </Link>
        </Box> */}
        <Box marginLeft={4}></Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha('#009b4c', 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
