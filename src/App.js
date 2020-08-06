import React from "react";
import { GoogleLogin } from "react-google-login";

function App() {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);

    const id_token = response.tokenObj.id_token

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8282/loginGoogle");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
      console.log("Signed in as: " + xhr.responseText);
    };
    xhr.send("idtoken=" + id_token);
  };

  return (
    <div>
      <GoogleLogin
        clientId="213496655861-15gn0u18atkl8l8fak7s2puik0kbnb9f.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;
