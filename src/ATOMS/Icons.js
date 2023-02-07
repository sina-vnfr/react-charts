import React from 'react'
import { Box } from '@mui/system'
import { Button } from '@mui/material'



function Icons(props) {
    const pages = ['Products', 'Pricing', 'Blog'];
    const handleCloseNavMenu = () => {
        props.setAnchorElNav(null);
      };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {pages.map((page) => (
      <Button
        key={page}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {page}
      </Button>
    ))}
  </Box>

  )
}

export default Icons    