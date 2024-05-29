import React from "react";
import '../../App.css';
import { 
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia
 } from "@mui/material";


const OurHotels = () => {
    return (
        <Box padding={'0% 8% 4% 9%'}>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Cardo, serif', padding: '0% 0% 5% 0%' }}>Our Hotels</Typography>
            <Box display={"flex"} flexDirection={"row"} gap={'3%'}>
                <Card sx={{ maxWidth: '31%' }}>
                    <CardMedia
                        sx={{ height: '330px', backgroundPosition: 'right' }}
                        image="https://fivestar.websitelayout.net/img/blog/blog-03.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ padding: '3% 0% 0% 0%', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Cardo, serif', color: '#423e39' }}> The Waldorf Astoria, New York </Typography>
                        <Typography variant="body2" sx={{ padding: '3% 0% 14% 0%', fontSize: '16px', color: '#6c6864' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography sx={{ display: 'flex', fontSize: '18px', fontFamily: 'Cardo, serif', '&: hover' : { color: '#2196f3'} }}>
                            View Details ➙
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: '31%' }}>
                    <CardMedia
                        sx={{ height: '330px', backgroundPosition: 'right' }}
                        image="https://fivestar.websitelayout.net/img/blog/blog-05.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ padding: '3% 0% 0% 0%', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Cardo, serif', color: '#423e39' }}> Raffles, Singapore </Typography>
                        <Typography variant="body2" sx={{ padding: '3% 0% 14% 0%', fontSize: '16px', color: '#6c6864'  }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography sx={{ display: 'flex', fontSize: '18px', fontFamily: 'Cardo, serif', '&: hover' : { color: '#2196f3'} }}>
                            View Details ➙
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: '31%' }}>
                    <CardMedia
                        sx={{ height: '330px', backgroundPosition: 'right' }}
                        image="https://fivestar.websitelayout.net/img/portfolio/10.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ padding: '3% 0% 0% 0%', fontSize: '26px', fontWeight: 'bold', fontFamily: 'Cardo, serif', color: '#423e39' }}> The Beverly Hills, Los Angeles </Typography>
                        <Typography variant="body2" sx={{ padding: '3% 0% 14% 0%', fontSize: '16px', color: '#6c6864'  }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography sx={{ display: 'flex', fontSize: '18px', fontFamily: 'Cardo, serif',  '&: hover' : { color: '#2196f3'} }}>
                            View Details ➙
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}

export default OurHotels;