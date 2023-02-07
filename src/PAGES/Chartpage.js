import { Box } from '@mui/material'
import React from 'react'
import {  Stack } from '@mui/material';
import ActionAreaCard from '../ORGANISME/ActionAreaCard'


const Chartpage = () => {
  const intTable = ["Circle", "Linechart", "Radialchart", "Stakedchart" , 'Snakechart' , 'Radarchart' , 'Verticalchart'];
  return (
    <Box sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {intTable.map((y) => (
         <Box id={y}>
            <ActionAreaCard shape={y} />
         </Box>
        ))}
      </Stack>

    </Box>
  )
}

export default Chartpage

