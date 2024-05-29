import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HotelCard from "../HotelCardComponent/HotelCardComponent";
import {
    Box,
    Breadcrumbs,
    Divider,
    Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from './HotelPage.module.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Hotels = () => {

    return (
        <>
            <Navbar />
            <Box>
                <Box className={styles.box}>
                    <Typography className={styles.text}>Our Hotels</Typography>
                    <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: "large", color: "white" }} />} className={styles.breadcrumbs}>
                        <Link to="/" className={`${styles.link} ${styles.firstlink}`}>Home</Link>
                        <Link className={`${styles.link} ${styles.secondlink}`}>Our Hotels</Link>
                    </Breadcrumbs>
                </Box>
                <Box>
                    <Typography className={`${styles.text} ${styles.hoteltext}`}>Our Hotels</Typography>
                    <Typography className={styles.subText}>Discover Your Ideal Stay: Browse Our Range of Exquisite Hotels</Typography>
                </Box>
                <HotelCard />
            </Box>
            <Divider />
            <Footer />
        </>
    );
}

export default Hotels;
