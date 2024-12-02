import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SellCar from "./pages/SellCar";
import Login from "./pages/Login";
import ContactInfo from "./components/ContactInfo";
import Header from "./components/Header";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import CarDetail from "./pages/CarDetail"; // Add this import

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<SellCar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car/:id" element={<CarDetail />} /> {/* Add this route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
