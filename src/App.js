// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SellCar from './pages/SellCar';
import Login from './pages/Login';
import ContactInfo from './components/ContactInfo';
import Header from './components/Header';
import CarDetail from './pages/CarDetail';
import Register from './pages/Register';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-car" element={<SellCar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-info" element={<ContactInfo />} />
        <Route path="/car/:id" element={<CarDetail />} /> {/* Add this route */}
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;