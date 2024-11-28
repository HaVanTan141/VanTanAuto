import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>VĂN TÂN AUTO</h1>
      <nav>
        <Link to="/">Trang chủ</Link>
        <Link to="/login">Đăng nhập</Link>
        <Link to="/register">Đăng ký</Link>
        <Link to="/contact">Liên hệ</Link>
      </nav>
    </header>
  );
};
export default Header;
