import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styles from '../HotelDetails/HotelDetails.module.css';
import style from './RoomDetails.module.css';
import {
    Box,
    Breadcrumbs,
    Divider,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Footer from "../Footer/Footer";
import RoomServices from "../RoomServices/RoomServices";

const RoomDetails = () => {

    const { room_id } = useParams();

    const [value, setValue] = useState(1);
    const [roomDetails, setRoomDetails] = useState({});
    const [roomImages, setRoomImages] = useState({});

    const handleValueChange = (event, newValue) => {
        setValue(newValue);
    }

    const fetchRoomDetails = () => {
        axios.get(`http://localhost:8000/hotel/get-room-details/${room_id}/`)
            .then((response) => {
                setRoomDetails(response.data.room_details);
                setRoomImages(response.data.room_images);
            })
    };

    useEffect(() => {
        fetchRoomDetails();
    }, [room_id]);

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    backgroundImage: `url(${roomImages.image1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.4)',
                    position: 'relative'
                }}
            >
                <Typography className={styles.text}>{roomDetails.room_type_name} Room</Typography>
                <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: "large", color: "white" }} />} className={styles.breadcrumbs}>
                    <Link to="/" className={`${styles.link} ${styles.firstlink}`}>Home</Link>
                    <Link to="/hotels" className={`${styles.link} ${styles.firstlink}`}>{roomDetails.hotel_name}</Link>
                    <Link to={`/hotel_room/${roomDetails.hotel_id}`} className={`${styles.link} ${styles.firstlink}`}>Our Rooms</Link>
                    <Link className={`${styles.link} ${styles.secondlink}`}>{roomDetails.room_type_name} Room</Link>
                </Breadcrumbs>
            </Box >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Tabs value={value} onChange={handleValueChange} className={styles.tabs}>
                    <Tab label="ABOUT" value={1} className={styles.tabText} />
                    <Tab label="OUR Services" value={2} className={styles.tabText} />
                </Tabs>
            </Box>
            <Divider className={style.divider} />
            <Box className={style.box}>
                {value === 1 &&
                    <>
                        <Box className={style.carosel}>
                            <Carousel
                                animation="slide"
                                autoPlay={true}
                                navButtonsAlwaysVisible={true}
                                cycleNavigation={true}
                                indicators={true}
                                timeout={100}
                                sx={{ width: '60%' }}
                            >
                                {Object.values(roomImages).map((image, index) => (
                                    <img src={image} alt={`slide-${index}`} style={{ width: '100%' }} />
                                ))}
                            </Carousel>
                        </Box>
                        <Box>
                            <Typography className={style.text}>Information</Typography>
                            <Typography className={style.subText}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                making it look like readable English. Many desktop publishing packages.
                            </Typography>
                            <Divider sx={{ borderWidth: 'thin' }} />
                            <Typography className={style.text}>Facility</Typography>
                            <div style={{ rowCount: 4, columnCount: 4 }}>
                                {roomDetails.room_facilities?.split(',').map((facility, index) => (
                                    <Typography key={index} className={`${style.subText} ${style.facilities}`}>
                                        ✓  {facility}
                                        <br />
                                    </Typography>
                                ))}
                            </div>
                        </Box>
                    </>
                }
                {value === 2 &&
                    <RoomServices roomId={roomDetails.id} />
                }
            </Box>
            <Divider />
            <Footer />
        </>
    );
}


export default RoomDetails;