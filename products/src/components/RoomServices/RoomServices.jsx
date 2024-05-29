import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from '../HotelCardComponent/HotelCard.module.css';
import cardStyle from '../HotelRooms/HotelRooms.module.css';
import roomService from './RoomServices.module.css';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Typography
} from "@mui/material";
import NotFound from "../NotFound/NotFound";
import Loader from "../Loader/Loader";


const RoomServices = ({ roomId }) => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchServices = () => {
        axios.get(`http://localhost:8000/hotel/admin_list_activities_of_room/${roomId}/`)
            .then((response) => {
                setLoading(false)
                setServices(response.data.map(services => services.additional_activites_details))
            })
            .catch((error) => {
                console.log(error.repsonse)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchServices();
    }, []);

    if (loading) {
        return (
            <Loader />
        );
    };

    return (
        <>
            <Box className={`${styles.box} ${roomService.box}`}>
                {services.length === 0 && (
                    <NotFound />
                )}
                {services.map((service, index) => (
                    <Card className={styles.card}>
                        <CardMedia
                            className={cardStyle.cardMedia}
                            image={`http://localhost:8000/${service.image}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className={styles.hotel_name}>
                                {service.title}
                            </Typography>
                            <Typography className={roomService.subText}>
                                {service.description}
                            </Typography>
                            <Box className={styles.price_box}>
                                <Typography variant="body2" className={styles.hotel_price_details}>
                                    Starts From
                                </Typography>
                                <Typography className={styles.hotel_price}>
                                    ₹{service.price}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <Divider />
        </>
    );
}

export default RoomServices;