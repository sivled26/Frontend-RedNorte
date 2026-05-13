import React, { useState } from "react";
import "./login.css";

function Login({ onLogin, onForgotPassword, onRegister }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && password === "1234") {
      onLogin();
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <h2>Hospital RedNorte</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Correo electrónico o número de usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="primary-btn">Iniciar sesión</button>
      </form>

      <p className="forgot-text" onClick={onForgotPassword}>
        ¿Olvidaste tu contraseña?
      </p>

      <button type="button" className="secondary-btn" onClick={onRegister}>
        Crear cuenta nueva
      </button>
    </div>
  );
}

export default Login;
