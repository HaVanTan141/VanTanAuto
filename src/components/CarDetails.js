const CarDetails = ({ car }) => (
  <div className="car-details">
    <img src={car.image} alt={car.name} />
    <h1>{car.name}</h1>
    <p>Giá: {car.price}</p>
    <p>{car.description}</p>
  </div>
);

export default CarDetails;
