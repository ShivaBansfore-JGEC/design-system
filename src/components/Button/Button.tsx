import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div>
      <button className="button primary-button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
