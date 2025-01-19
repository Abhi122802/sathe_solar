import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "./Frontend/pages/home";
import Solutions from "./Frontend/pages/Solution";
import About from "./Frontend/pages/about";
import Contact from "./Frontend/pages/contact";
import Learn from "./Frontend/pages/Learn";
import Products from "./Frontend/pages/products";


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
      </Routes>
    </Router>
  );
}

export default App;
