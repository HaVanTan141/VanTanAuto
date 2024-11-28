import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SellCar from "./pages/SellCar";
import Login from "./pages/Login";
import ContactInfo from "./components/ContactInfo";
import Header from "./components/Header";
import Register from "./pages/Register";
import Footer from "./components/Footer";

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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
