import React from "react";
import { useNavigate } from "react-router-dom";

const brands = [
  "Ford",
  "Honda",
  "Hyundai",
  "Kia",
  "Lexus",
  "Mitsubishi",
  "Nissan",
  "Peugeot",
  "Subaru",
  "Suzuki",
  "Toyota",
  "VinFast",
  "Volvo",
];

const BrandFilter = ({ onBrandSelect }) => {
  const navigate = useNavigate();

  const handleBrandSelect = (brand) => {
    onBrandSelect(brand);
    navigate("/");
  };

  return (
    <div className="brand-filter">
      <h3>Tìm Theo Hãng </h3>
      <ul>
        {brands.map((brand) => (
          <li key={brand}>
            <button onClick={() => handleBrandSelect(brand)}>{brand}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
