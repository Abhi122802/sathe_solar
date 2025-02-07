import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import Footer from "./Frontend/footer";
import Home from "./Frontend/pages/home";
import Solutions from "./Frontend/pages/Solution";
import About from "./Frontend/pages/about";
import Contact from "./Frontend/pages/contact";
import Learn from "./Frontend/pages/Learn";
import Products from "./Frontend/pages/productdisplay";
import ProductDetails from "./Frontend/productdetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
