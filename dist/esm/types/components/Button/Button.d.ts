import React from "react";
import "./Button.scss";
export interface ButtonProps {
    label: string;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
