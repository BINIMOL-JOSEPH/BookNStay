import React from "react";
import '../../App.css';
import { 
    Box,
    Stack,
    Typography
 } from "@mui/material";

const Paragraph = () => {
    return (
        <Box>
            <Stack direction={"row"}>
                <Typography sx={{ display: 'flex', justifyContent: 'center', width: '34%', padding: '8% 0% 6% 9%', fontSize: '63px', fontFamily: 'Cardo, serif', wordSpacing: '14px', color: '#423e39' }}>Journey after your expectations, with Book'N'Stay</Typography>
                <Typography  sx={{ display: 'flex', justifyContent: 'center', width: '41%', padding: '10% 0% 6% 7%', fontSize: '21px', fontFamily: 'Cardo, serif', color: '#423e39' }}>
                    Welcome to Book 'N' Stay, where convenience meets quality in your search for the perfect stay.
                    With trusted partnerships and competitive rates, we're committed to making your travel dreams a reality.
                    Book with confidence at Book 'N' Stay and embark on your next adventure with ease.
                </Typography>
            </Stack>
        </Box>
    );
}

export default Paragraph;