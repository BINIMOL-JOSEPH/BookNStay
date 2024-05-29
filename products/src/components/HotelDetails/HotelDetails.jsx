import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from './HotelDetails.module.css';
import style from '../RoomDetails/RoomDetails.module.css';
import {
    Box,
    Breadcrumbs,
    Divider,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import HotelRoom from "../HotelRooms/HotelRooms";
import Footer from "../Footer/Footer";
import Review from "../Reviews/Reviews";
import Loader from "../Loader/Loader";

const HotelDetails = () => {

    const { id } = useParams();
    const [hotelData, setHotelData] = useState([]);
    const [value, setValue] = useState('1');
    const [loading, setLoading] = useState(true);

    const handleValueChange = (event, newValue) => {
        setValue(newValue);
    }

    const fetchHotelDetails = () => {
        axios.get(`http://localhost:8000/hotel/view-hotel/${id}/`)
            .then((response) => {
                setHotelData(response.data);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchHotelDetails();
        setValue(2);
    }, []);

    if (loading) {
        return(
            <Loader />
        );
    };

    return (
        <>
            <Navbar />
            {hotelData.map((hotel) => (
                <>
                    <Box
                        sx={{
                            backgroundImage: `url(${hotel.hotel_image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.4)',
                            position: 'relative'
                        }}
                    >
                        <Typography className={styles.text}>{hotel.hotel_details.hotel_name} </Typography>
                        <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: "large", color: "white" }} />} className={styles.breadcrumbs}>
                            <Link to="/" className={`${styles.link} ${styles.firstlink}`}>Home</Link>
                            <Link to="/hotels" className={`${styles.link} ${styles.firstlink}`}>Our Hotels</Link>
                            <Link className={`${styles.link} ${styles.secondlink}`}>{hotel.hotel_details.hotel_name} </Link>
                        </Breadcrumbs>
                    </Box >
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Tabs value={value} onChange={handleValueChange} className={styles.tabs}>
                            <Tab label="ABOUT" value={1} className={styles.tabText} />
                            <Tab label="OUR ROOMS" value={2} className={styles.tabText} />
                            <Tab label="REVIEWS" value={3} className={styles.tabText} />
                        </Tabs>
                    </Box>
                    <Divider className={styles.divider} />
                    <Box className={style.box}>
                        {value === 1 &&
                            <>
                                <Box>
                                    <Typography className={style.text}>Information</Typography>
                                    <Typography className={style.subText}>
                                        {hotel.hotel_details.description}
                                    </Typography>
                                    <Divider sx={{ borderWidth: 'thin' }} />
                                    <Typography className={style.text}>Location</Typography>
                                    <Box className={styles.locationlink}>
                                        <BusinessIcon className={styles.icons} />
                                        <Link className={`${styles.label} ${styles.label1}`} to={`${hotel.hotel_details.location_link}`}>
                                            {hotel.hotel_details.address}, {hotel.hotel_details.city}, {hotel.hotel_details.district}
                                        </Link>
                                    </Box>
                                    <Divider sx={{ borderWidth: 'thin' }} />
                                    <Typography className={style.text}>Contact Details</Typography>
                                    <Box display={"flex"} flexDirection={"column"}>
                                        <Box className={styles.locationlink} sx={{ padding: '2% 0% 0% 0% !important'}}>
                                            <EmailIcon className={styles.icons} />
                                            <Typography className={styles.label}>
                                                Email  :   {hotel.hotel_details.email}
                                            </Typography>
                                        </Box>
                                        <Box className={styles.locationlink}>
                                            <CallIcon className={styles.icons} />
                                            <Typography className={styles.label}>
                                                Tele  :   {hotel.hotel_details.email}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </>
                        }
                        {value === 2 &&
                            <HotelRoom roomId={hotel.hotel_details.id} />
                        }
                        {value === 3 && 
                            <Review hotel_id={id} />
                        }
                    </Box>
                </>
            ))}
            <Divider />
            <Footer />
        </>
    )
}

export default HotelDetails;