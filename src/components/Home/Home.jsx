import React from "react";
import "./home.css";

function Home({ onGoToLogin }) {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Hospital RedNorte</h1>
        <button className="login-btn" onClick={onGoToLogin}>
          Iniciar sesión
        </button>
      </header>

      <main className="home-main">
        <h2>Bienvenido al sistema</h2>
        <p>
          Esta es la página principal del Hospital RedNorte. Puedes navegar como invitado
          y conocer más sobre nuestros servicios. Para acceder al sistema completo,
          inicia sesión con tu cuenta.
        </p>
      </main>
    </div>
  );
}

export default Home;
