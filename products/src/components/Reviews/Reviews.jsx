import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    Card,
    CardContent,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import reviewStyle from './Reviews.module.css';
import NotFound from "../NotFound/NotFound";
import Loader from "../Loader/Loader";


const Review = ({ hotel_id }) => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchReviews = () => {
        axios.get(`http://localhost:8000/hotel/hotel-reviews-for-customer/${hotel_id}/`)
            .then((response) => {
                setReviews(response.data)
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    useEffect(() => {
        fetchReviews();
    }, []);

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <Box className={reviewStyle.box}>
            {reviews.length === 0 && (
                <NotFound />
            )}
            {reviews.map((review) => (
                <Card className={reviewStyle.card}>
                    <CardContent>
                        <Typography className={reviewStyle.title}>
                            {review.title}
                        </Typography>
                        <Stack direction={'row'} className={reviewStyle.name}>
                            <Rating size="small" value={review.rating} readOnly />
                            <Typography sx={{ fontSize: 'small' }}>
                                &nbsp;  by {review.customer_name} on {review.created_at}
                            </Typography>
                        </Stack>
                        <Typography className={reviewStyle.comment}>
                            {review.comment}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}

export default Review;