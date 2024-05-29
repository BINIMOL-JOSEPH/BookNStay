import React from 'react';
import { 
    Stack, 
    Typography,
    Box,
 } from '@mui/material';

const Navbar = () => {
    return (
        <Box sx={{ backgroundColor: '#6f6f6f'}} >
            <Box sx={{ backgroundColor: 'white', width: '100%', height: '100px' }}>
                <Stack direction={"row"}>
                    <Typography sx={{ fontSize: '37px', fontFamily: 'cursive', fontWeight: 'bolder', padding: '1.8% 56% 0% 4%', width: 'fit-content' }}>BooknStay</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '28%', wordSpacing: '2%' }}>
                        <Typography sx={{ padding: '10% 9% 0% 0%', textTransform: 'uppercase' }}>Home</Typography>
                        <Typography sx={{ padding: '10% 9% 0% 0%', textTransform: 'uppercase' }}>About us</Typography>
                        <Typography sx={{ padding: '10% 9% 0% 0%', textTransform: 'uppercase' }}>Contact</Typography>
                        <Typography sx={{ padding: '10% 9% 0% 0%', textTransform: 'uppercase' }}>Rooms</Typography>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default Navbar;