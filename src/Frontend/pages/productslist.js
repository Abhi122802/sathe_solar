import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid, Container, Button } from "@mui/material";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Rating from '@mui/material/Rating';
import { products } from "./productlist";


const ProductList = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <section className="heading">
                <Typography variant="h3" align="center" gutterBottom>Our Products</Typography>
                <Typography variant="body1" align="center">
                    We offer a wide range of electronic equipment, control panels, electronic timers, pump controllers, buck boost stabilizers, servo stabilizers, UPS, and inverters.
                </Typography>
            </section>

            <Grid container spacing={4} justifyContent="center">
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="item">
                            <CardMedia component="img" image={product.image} alt={product.name} className="imgback" />
                            <CardContent className="info">
                                <Typography variant="h6" className="title">{product.name}</Typography>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                <Button variant="contained" className='text-g ml-auto transition' startIcon={<ReadMoreIcon />}
                                    onClick={() => navigate(`/product/${product.id}`)}>
                                    Get More Info
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
