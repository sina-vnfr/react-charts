import React from 'react'
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';

const Logoname = () => {
  return (
    <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

  )
}

export default Logoname