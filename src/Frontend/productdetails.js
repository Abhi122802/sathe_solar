import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { 
    Container, Typography, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, 
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, 
    DialogContent, DialogTitle, TextField 
} from "@mui/material";
import { products } from "./pages/productlist";

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));

    const [open, setOpen] = useState(false);
    const [buyOpen, setBuyOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [buyForm, setBuyForm] = useState({ mobile: "" });

    if (!product) return <Typography variant="h6">Product not found</Typography>;

    // Handle Input Changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleBuyChange = (e) => {
        setBuyForm({ ...buyForm, [e.target.name]: e.target.value });
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Card sx={{ boxShadow: 3, borderRadius: 3, overflow: 'hidden' }}>
                <Grid container>
                    {/* Product Image */}
                    <Grid item xs={12} md={5}>
                        <CardMedia 
                            component="img" 
                            image={product.image} 
                            alt={product.name} 
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Grid>

                    {/* Product Details */}
                    <Grid item xs={12} md={7}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom color="primary">{product.name}</Typography>
                            <Typography variant="h6" sx={{ color: "#ff5722", fontWeight: "bold" }}>{product.price}</Typography>
                            <Typography variant="body1" sx={{ mt: 2, fontStyle: "italic", color: "#757575" }}>{product.description}</Typography>

                            {/* Features Section */}
                            <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold", color: "#0288d1" }}>Features</Typography>
                            <List dense>
                                {product.features.map((feature, index) => (
                                    <ListItem key={index} sx={{ pl: 0 }}>
                                        <ListItemText primary={`✔ ${feature}`} />
                                    </ListItem>
                                ))}
                            </List>

                            {/* Action Buttons */}
                            <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} onClick={() => setOpen(true)}>
                                Get Best Quote
                            </Button>
                            <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => setBuyOpen(true)}>
                                Interested to Buy
                            </Button>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>

            {/* Additional Details */}
            <Grid container spacing={3} sx={{ mt: 3 }}>
                {/* Manufacturing */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, boxShadow: 3 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#0288d1" }}>Manufacturing</Typography>
                        <List dense>
                            {product.manufacturing.map((item, index) => (
                                <ListItem key={index} sx={{ pl: 0 }}>
                                    <ListItemText primary={`🏭 ${item}`} />
                                </ListItem>
                            ))}
                        </List>
                    </Card>
                </Grid>

                {/* Applications */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, boxShadow: 3 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#0288d1" }}>Applications</Typography>
                        <List dense>
                            {product.application.map((app, index) => (
                                <ListItem key={index} sx={{ pl: 0 }}>
                                    <ListItemText primary={`📌 ${app}`} />
                                </ListItem>
                            ))}
                        </List>
                    </Card>
                </Grid>
            </Grid>

            {/* Specifications Table */}
            <Card sx={{ mt: 4, p: 3, boxShadow: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#0288d1" }}>Specifications</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                <TableCell sx={{ fontWeight: "bold" }}>Property</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <TableRow key={key}>
                                    <TableCell sx={{ fontWeight: "bold" }}>{key}</TableCell>
                                    <TableCell>{value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            {/* Get Best Quote Dialog */}
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>Get Best Quote</DialogTitle>
                <DialogContent>
                    <Typography variant="h6" sx={{ color: "#0288d1", textAlign: "center", fontWeight: "bold" }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>{product.price}</Typography>

                    <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" />
                    <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} margin="normal" />
                    <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} margin="normal" />
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                    <Button variant="contained" color="primary" onClick={() => alert("Request Sent!")}>Submit</Button>
                    <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>

            {/* Interested to Buy Dialog */}
            <Dialog open={buyOpen} onClose={() => setBuyOpen(false)} fullWidth maxWidth="sm">
    <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>Interested to Buy</DialogTitle>
    <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Product Image */}
        <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{ width: "200px", height: "200px", objectFit: "contain", borderRadius: "10px", mb: 2 }}
        />
        
        {/* Product Name */}
        <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>{product.name}</Typography>

        {/* Seller Info */}
        <Typography variant="body1" sx={{ textAlign: "center", color: "#0288d1", fontWeight: "bold" }}>
            Sold By - Sathe Engineering Company, Solapur, Maharashtra
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center", mb: 2 }}>
            Connect with "Sathe Engineering Company"
        </Typography>

        {/* Mobile Number Input */}
        <TextField fullWidth label="Mobile Number" name="mobile" value={buyForm.mobile} onChange={handleBuyChange} margin="normal" />
    </DialogContent>

    <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button variant="contained" color="primary" onClick={() => alert("Request Sent!")}>Submit</Button>
        <Button variant="outlined" color="secondary" onClick={() => setBuyOpen(false)}>Cancel</Button>
    </DialogActions>
</Dialog>

        </Container>
    );
};

export default ProductDetails;
