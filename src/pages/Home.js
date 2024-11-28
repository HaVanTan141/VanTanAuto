import React, { useState } from "react";
import CarList from "../components/CarList";
import BrandFilter from "../components/BrandFilter";
import { getCars } from "../features/cars";

const Home = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const cars = getCars();

  const filteredCars = selectedBrand
    ? cars.filter((car) => car.brand === selectedBrand)
    : cars;

  return (
    <div className="home-page">
      <div className="side-menu">
        <BrandFilter onBrandSelect={setSelectedBrand} />
      </div>
      <div className="main-content">
        {selectedBrand && <h2>Hãng: {selectedBrand}</h2>}
        <CarList cars={filteredCars} />
      </div>
    </div>
  );
};

export default Home;
