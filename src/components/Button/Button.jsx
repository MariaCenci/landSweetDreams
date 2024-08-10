import React from "react";
import "./button.scss";

const Button = ({ label, onclick, className, icon, iconName }) => {
  return (
    <>
      <button className={`btn-${className}`} onClick={onclick}>
        {label}
     {icon && <img className={`icon-${iconName}`} src={icon} />}
      </button>
    </>
  );
};

export default Button;
