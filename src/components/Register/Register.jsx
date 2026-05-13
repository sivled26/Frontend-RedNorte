import React, { useState } from "react";
import "./register.css";

function Register({ onBack }) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    run: "",
    birthdate: "",
    address: "",
    maritalStatus: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cuenta creada con éxito (simulación).");
    onBack(); // volver al login
  };

  return (
    <div className="register-container">
      <h2>Crear cuenta nueva</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} />
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
        <input type="text" name="lastname" placeholder="Apellido" onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
        <input type="text" name="run" placeholder="RUN" onChange={handleChange} />
        <input type="date" name="birthdate" onChange={handleChange} />
        <input type="text" name="address" placeholder="Dirección" onChange={handleChange} />
        <select name="maritalStatus" onChange={handleChange}>
          <option value="">Estado civil</option>
          <option value="soltero">Soltero/a</option>
          <option value="casado">Casado/a</option>
          <option value="divorciado">Divorciado/a</option>
          <option value="viudo">Viudo/a</option>
        </select>
        <button type="submit" className="primary-btn">Registrar</button>
      </form>
      <button type="button" className="secondary-btn" onClick={onBack}>
        Volver al login
      </button>
    </div>
  );
}

export default Register;
