const CarCard = ({ car }) => (
  <div className="car-card">
    <img src={car.image} alt={car.name} />
    <h3>{car.name}</h3>
    <p>Giá: {car.price} Triệu VNĐ</p>
    <a href={`/car/${car.id}`}>Xem chi tiết</a>
  </div>
);

export default CarCard;
