import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import Saludo from "./components/Saludo"

import loginImg from "./login.png";

function App() {
  const [userGoogle, setUserGoogle] = useState({});

  const responseGoogle = (response) => {
    const id_token = response.tokenObj.id_token;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8282/loginGoogle");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
     setUserGoogle(JSON.parse((xhr.responseText)));
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
        <Saludo userGoogle = {userGoogle} />
      </div>
    </div>
  );
}

export default App;
