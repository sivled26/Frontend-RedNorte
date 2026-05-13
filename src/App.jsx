import React, { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/Register/Register";

function App() {
  // Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Estado para mostrar login o registro
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Función para "Olvidé mi contraseña"
  const handleForgotPassword = () => {
    alert("Funcionalidad de recuperación de contraseña en construcción.");
  };

  return (
    <div className="app-container">
      {isAuthenticated ? (
        // Si está autenticado, mostramos el Dashboard
        <Dashboard />
      ) : showRegister ? (
        // Si el usuario quiere registrarse, mostramos el formulario de registro
        <Register onBack={() => setShowRegister(false)} />
      ) : showLogin ? (
        // Si el usuario quiere iniciar sesión, mostramos el login
        <Login
          onLogin={() => setIsAuthenticated(true)}
          onForgotPassword={handleForgotPassword}
          onRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      ) : (
        // Página principal (Home) como invitado
        <Home onGoToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;
