import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './HotelCard.module.css';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import { Link } from "react-router-dom";

const HotelCard = () => {

    const [data, setData] = useState([]);

    const fetchActiveHotels = () => {
        axios.get('http://localhost:8000/hotel/list-active-hotels/')
            .then((response) => {
                setData(response.data)
            })
    }

    useEffect(() => {
        fetchActiveHotels();
    }, []);

    return (
        <Box className={styles.box}>
            {data.map((item, index) => (
                <Card className={styles.card}>
                    <CardMedia
                        sx={{ height: '330px', backgroundPosition: 'right' }}
                        image={item.hotel_image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className={styles.hotel_name}>
                            {item.hotel_details.hotel_name}, {item.hotel_details.state}
                        </Typography>
                        <Typography variant="h5" component="div" className={styles.hotel_details}>
                            {item.hotel_details.address} | {item.hotel_details.city} | {item.hotel_details.district}
                        </Typography>
                        <Box className={styles.price_box}>
                            <Typography variant="body2" className={styles.hotel_price_details}>
                                Starts From
                            </Typography>
                            <Typography className={styles.hotel_price}>
                                ₹{item.lowest_rate}/Night
                            </Typography>
                        </Box>
                        <Link to={`/hotel_room/${item.hotel_details.id}`} className={styles.detailsLink}>
                            View Details ➙
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}

export default HotelCard;