import React from "react";

const Error = ({ userGoogle }) => {
  const { error, messague } = userGoogle;

  if (error) {
    return <h3 className="error">{messague}</h3>;
  }

  return null;
};

export default Error;
