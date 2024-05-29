import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from '../HotelCardComponent/HotelCard.module.css';
import cardStyle from './HotelRooms.module.css';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Typography
} from "@mui/material";
import { Link } from "react-router-dom";

const HotelRoom = ({ roomId }) => {

    const [rooms, setRooms] = useState([]);

    const fetchHotelRooms = () => {
        axios.get(`http://localhost:8000/hotel/hotel-room-details/${roomId}/`)
            .then((response) => {
                setRooms(response.data)
            })
    }

    useEffect(() => {
        fetchHotelRooms();
    }, []);

    return (
        <>
            <Box className={`${styles.box} ${cardStyle.box}`}>
                {rooms.map((room, index) => (
                    <Card className={styles.card}>
                        <CardMedia
                            className={cardStyle.cardMedia}
                            image={room.image.image1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className={styles.hotel_name}>
                                {room.room.room_type_name}
                            </Typography>
                            <Box className={styles.price_box}>
                                <Typography variant="body2" className={styles.hotel_price_details}>
                                    Starts From
                                </Typography>
                                <Typography className={styles.hotel_price}>
                                    ₹{room.room.rate}/Night
                                </Typography>
                            </Box>
                            <Link to={`/room_details/${room.room.id}`} className={styles.detailsLink}>
                                View Details ➙
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </>
    );
}

export default HotelRoom;