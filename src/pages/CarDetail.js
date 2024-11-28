import React from "react";
import { useParams } from "react-router-dom";
import CarDetails from "../components/CarDetails";
import { getCarById } from "../features/cars";

const CarDetail = () => {
  const { id } = useParams();
  const car = getCarById(id);

  if (!car) return <p>Không tìm thấy xe</p>;

  return <CarDetails car={car} />;
};

export default CarDetail;
