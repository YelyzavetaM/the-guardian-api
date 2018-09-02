import React from "react";

const Error = props => {
  return (
    <p className="error" style={{ color: "red" }}>
      Sorry, we couldn't find news for you. Please try again later!
    </p>
  );
};

export default Error;
