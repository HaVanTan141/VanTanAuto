import React from "react";
import LoginForm from "../components/LoginForm";
import { login } from "../features/auth";

const Login = () => {
  const handleLogin = (credentials) => {
    const user = login(credentials);
    alert(`Đăng nhập thành công! Xin chào, ${user.username}`);
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
