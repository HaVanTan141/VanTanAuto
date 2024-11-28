const SellCarForm = ({ onSubmit }) => {
  const [car, setCar] = React.useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (field, value) => setCar({ ...car, [field]: value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(car);
      }}
    >
      <InputField
        label="Tên xe"
        value={car.name}
        onChange={(value) => handleChange("name", value)}
        placeholder="Nhập tên xe"
      />
      <InputField
        label="Giá"
        value={car.price}
        onChange={(value) => handleChange("price", value)}
        type="number"
        placeholder="Nhập giá xe"
      />
      <InputField
        label="Mô tả"
        value={car.description}
        onChange={(value) => handleChange("description", value)}
        placeholder="Mô tả chi tiết"
      />
      <InputField
        label="Ảnh"
        value={car.image}
        onChange={(value) => handleChange("image", value)}
        type="url"
        placeholder="Link ảnh"
      />
      <Button label="Đăng tin" type="submit" />
    </form>
  );
};
