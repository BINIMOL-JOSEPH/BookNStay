import React from "react";
import Navbar from "../Navbar/Navbar";
import FilterContent from "../FilterContent/FilterContent";
import OurHotels from "../OurHotels/OurHotels";
import Paragraph from "../ContainerPara/ContainerPara";
import ImageButton from "../ImageButton/ImageButton";
import Footer from "../Footer/Footer";
import { 
    Box,
    Button,
    Typography
 } from "@mui/material";

const BodyContent = () => {
    return (
        <>
            <Navbar />
            <Box sx={{
                position: 'relative',
                width: '100%',
                backgroundImage: 'url(https://fivestar.websitelayout.net/img/banner/bg-05.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.3)',
            }}>
                <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'white', fontWeight: 'bolder', fontSize: '20px', padding: '8% 0% 1% 0%' }}>⛥ ⛥ ⛥ ⛥ ⛥</Typography>
                <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'white', fontWeight: 'bolder', fontSize: '30px', fontFamily: 'Cardo, serif' }}>Book N Stay</Typography>
                <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '90px', fontFamily: 'Cardo, serif', textTransform: 'uppercase', padding: '3% 0% 0% 0%'}}>Touch your dream</Typography>
                <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontFamily: 'Cardo, serif', fontSize: '27px' }}>Live your life</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '2% 0% 13% 0%', gap: '1%' }}>
                    <Button variant="outlined" sx={{ width: '15%', border: 'white 1px solid', display: 'flex',  color: 'white', fontWeight: 'bold', fontFamily: 'initial', padding: '0.5% 1.5% 0.5% 1.5%', '&:hover' : { boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.3)', border: 'white 1px solid' } }}>Book A Room Now</Button>
                    <Button variant="outlined" sx={{ width: '15%', border: 'white 1px solid', display: 'flex', color: 'white', fontWeight: 'bold', fontFamily: 'initial', padding: '0.5% 1.5% 0.5% 1.5%', '&:hover' : { boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.3)', border: 'white 1px solid' } }}>Contact Now</Button>
                </Box>
            </Box>
            <FilterContent />
            <Paragraph />
            <OurHotels />
            <ImageButton />
            <Footer />
        </>
    )
}

export default BodyContent;