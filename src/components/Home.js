import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import Error from "./Error";
import loginImg from "../login.png";

const Home = () => {
  const [userGoogle, setUserGoogle] = useState({});

  let Storage = window.localStorage;

  const responseGoogle = (response) => {
    const id_token = response.tokenObj.id_token;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8282/loginGoogle");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
      const dataServer = xhr.responseText;
      const dataUser = JSON.parse(dataServer);
      setUserGoogle(dataUser);
      if (!dataUser.error) {
        Storage.setItem("token", dataUser.token);
        window.location.href = "/GoogleData";
      }
    };
    xhr.send("idtoken=" + id_token);
  };

  return (
    <div className="section-google">
      <div className="container-google">
        <h1>Registro Con Google</h1>
        <img src={loginImg} alt="imgLogin" />
        <GoogleLogin
          className="google"
          clientId="213496655861-15gn0u18atkl8l8fak7s2puik0kbnb9f.apps.googleusercontent.com"
          buttonText="Inicia sesion con Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <Error userGoogle={userGoogle} />
      </div>
    </div>
  );
};

export default Home;
