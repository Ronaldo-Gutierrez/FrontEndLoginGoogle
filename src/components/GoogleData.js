import React from "react";
import jwt_decode from "jwt-decode";

const GoogleData = () => {
  const Storage = window.localStorage;

  const token = localStorage.getItem("token");
  const dataUser = jwt_decode(token);

  const { name, email, picture } = dataUser;

  const closeSection = () => {
    Storage.clear();
    window.location.href = "/";
  };

  return (
    <div className="section-google">
      <div className="container-google">
        <h1>Bienvenido </h1>
        <img className="imgUser" src={picture} alt="imgLogin" />
        <h2>{name}</h2>
        <h2>{email}</h2>
        <button onClick={closeSection} className="cerrarSesion">
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};

export default GoogleData;
