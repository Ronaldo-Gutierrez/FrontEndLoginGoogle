import React from "react";

const GoogleData = () => {
  const dataStorage = localStorage.getItem("User");
  const dataGoogle = JSON.parse(dataStorage);

  const Storage = window.localStorage

  const closeSection = () => {
    Storage.clear()
    window.location.href = "/";
  }

  if(Storage.length === 0){
    window.location.href = "/";
  }
  
  const { name, email, img } = dataGoogle


  return (
    <div className="section-google">
      <div className="container-google">
        <h1>Bienvenido </h1>
        <img
        className="imgUser"
          src={img}
          alt="imgLogin"
        />
        <h2>{name}</h2>
        <h2>{email}</h2>
        <button onClick={closeSection} className="cerrarSesion">Cerrar sesion</button>
      </div>
    </div>
  );
};

export default GoogleData;
