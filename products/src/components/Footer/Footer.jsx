import React from "react";
import {
    Box,
    Divider,
    Typography,
} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ display: "flex", padding: '4% 0% 5% 17%' }}>
            <Box display={"flex"} flexDirection={"column"} sx={{ width: '25%', padding: '0% 0% 0% 10%' }}>
                <Typography sx={{ fontFamily: 'Cardo, serif', fontSize: '25px', fontWeight: 'bold' }}>Reservation</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '3% 0% 10% 0%' }}>
                    <Divider sx={{ bgcolor: '#2196f3', width: '17%' }} />
                    <Divider sx={{ bgcolor: '#2196f3', width: '13%' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '6px' }}>
                    <Typography sx={{ color: '#6f6f6f', fontFamily: 'Cardo, serif', fontSize: '20px', fontWeight: 'bold' }}>Email : </Typography>
                    <Typography sx={{ color: '#6f6f6f', fontFamily: 'Cardo, serif', fontSize: '20px' }}>booknstay@abc.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '6px' }}>
                    <Typography sx={{ color: '#6f6f6f', fontFamily: 'Cardo, serif', fontSize: '20px', fontWeight: 'bold' }}>Tele : </Typography>
                    <Typography sx={{ color: '#6f6f6f', fontFamily: 'Cardo, serif', fontSize: '20px' }}>+91 9868753114</Typography>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} sx={{ width: '25%', padding: '0% 0% 0% 10%' }}>
                <Typography sx={{ fontFamily: 'Cardo, serif', fontSize: '25px', fontWeight: 'bold' }}>Useful Links</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '3% 0% 10% 0%' }}>
                    <Divider sx={{ bgcolor: '#2196f3', width: '17%' }} />
                    <Divider sx={{ bgcolor: '#2196f3', width: '13%' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <Typography sx={{ color: '#6f6f6f', fontFamily: 'Cardo, serif', fontSize: '20px' }}>About Us</Typography>
                    <Typography sx={{ color: '#6f6f6f', fontFamily: 'Cardo, serif', fontSize: '20px' }}>Location</Typography>
                    <Typography sx={{ color: '#6f6f6f', fontFamily: 'Cardo, serif', fontSize: '20px' }}>Terms & Conditions</Typography>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} sx={{ width: '25%', padding: '0% 0% 0% 10%' }}>
                <Typography sx={{ fontFamily: 'Cardo, serif', fontSize: '25px', fontWeight: 'bold' }}>Social Links</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <Divider sx={{ bgcolor: '#2196f3', width: '17%' }} />
                    <Divider sx={{ bgcolor: '#2196f3', width: '13%' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;