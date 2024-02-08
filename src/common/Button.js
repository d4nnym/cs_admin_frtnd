import React from "react";

const Button = ({ variant = "", children, onClick = null, type }) => {
  return (
    <>
      <button
        type={type}
        className={`${variant} btn`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

