import React, { useState } from "react";
import "./register.css";

function Register({ onBack }) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastname: "",
    password: "",
    run: "",
    birthdate: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cuenta creada con éxito (simulación).");
    onBack();
  };

  return (
    <div className="register-container">
      <button type="button" className="page-back-btn" onClick={onBack}>
        ← Volver atrás
      </button>
      <div className="register-box">
        <h2>Crear cuenta nueva</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Apellido"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="run"
            placeholder="RUN"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="birthdate"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            onChange={handleChange}
            required
          />
          <button type="submit" className="primary-btn">
            Registrar
          </button>
        </form>
        <button type="button" className="secondary-btn" onClick={onBack}>
          Volver al login
        </button>
      </div>
    </div>
  );
}

export default Register;
