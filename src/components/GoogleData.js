import React, { useEffect, useState } from "react";
import axios from "axios";

const GoogleData = () => {
  const [dataUser, setDataUser] = useState({});

  const Storage = window.localStorage;

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");
      try {
        const informationUser = await axios({
          method: "get",
          url: "http://localhost:8282/home",
          headers: { token: token },
        });
        setDataUser(informationUser.data.user);
      } catch (err) {
        window.location.href = "/";
      }
    };
    getData();
  }, []);

  const closeSection = () => {
    Storage.clear();
    window.location.href = "/";
  };

  const { name, email, img } = dataUser;

  return (
    <div className="section-google">
      <div className="container-google">
        <h1>Bienvenido </h1>
        <img className="imgUser" src={img} alt="imgLogin" />
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
