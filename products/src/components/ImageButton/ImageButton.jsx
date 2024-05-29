import React from "react";
import { 
    Stack, 
    Typography,
    Box
} from "@mui/material";

const ImageButton = () => {
    return (
        <Stack direction={"row"} sx={{ width: '100%', padding: '3% 0% 5% 0%' }}>
            <Box
                sx={{
                    width: '50%',
                    backgroundImage: 'url(https://fivestar.websitelayout.net/img/content/04.jpg)',
                    backgroundSize: 'cover',
                    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60vh'
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%',height: '64%', border: 'white 3px solid', '&:hover' : { cursor: 'pointer' } }}>
                    <Typography sx={{ padding: '28px', fontSize: '58px', fontWeight: 'bold', fontFamily: 'Cardo, serif', color: 'white', textAlign: 'center', margin: '0%' }}>Restaurant & Food</Typography>
                    <Typography sx={{ fontFamily: "'Cardo, serif', cursive", color: 'white', textAlign: 'center', fontSize: '23px' }}>See what makes Book 'N' Stay</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '50%', 
                    backgroundImage: 'url(https://fivestar.websitelayout.net/img/content/05.jpg)',
                    backgroundSize: 'cover',
                    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60vh'
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%',height: '64%', border: 'white 3px solid', '&:hover' : { cursor: 'pointer' }  }}>
                    <Typography sx={{ padding: '28px', fontSize: '58px', fontWeight: 'bold', fontFamily: 'Cardo, serif', color: 'white', textAlign: 'center', margin: '0%' }}>Rooms & Apartments</Typography>
                    <Typography sx={{ fontFamily: "'Cardo, serif', cursive", color: 'white', textAlign: 'center', fontSize: '23px' }}>See what makes Book 'N' Stay</Typography>
                </Box>
            </Box>
        </Stack>
    );
}

export default ImageButton;