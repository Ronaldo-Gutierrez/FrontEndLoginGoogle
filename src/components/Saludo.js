import React from "react";

const Saludo = ({ userGoogle }) => {
  if (Object.keys(userGoogle).length === 0) {
    return null;
  }

  const { name, error } = userGoogle;

  if (error) {
    return <h3 className="error">{userGoogle.messague}</h3>;
  }

  return (
    <div className="saludo">
      <h1>Bienvenido</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default Saludo;
