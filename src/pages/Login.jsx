import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { authService } from "../services/authService.jsx";
import AuthModal from "../components/AuthModal/AuthModal.jsx";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const authContext = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await authService.login(
        credentials.username,
        credentials.password,
      );
      if (authContext?.login) {
        authContext.login({ username: data.username, role: data.role });
      }
      if (data.role === "ADMIN") navigate("/admin");
      else navigate("/dashboard");
    } catch (err) {
      setError(err?.message || "Error al iniciar sesión");
    }
  };

  return (
    <AuthModal
      onClose={() => navigate("/")}
      credentials={credentials}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
