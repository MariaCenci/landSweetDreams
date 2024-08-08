import React from "react";
import "./button.scss";

const Button = ({ label, onclick, className }) => {
  return (
    <>
      <button className={`btn-${className}`} onClick={onclick}>
        {label}
      </button>
    </>
  );
};

export default Button;
