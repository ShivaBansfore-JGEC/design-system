import React from "react";
import "./Button.scss";

export interface ButtonProps {
  type: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  label: string;
  loading?: boolean;
  disabled?: boolean;
  classes?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  size,
  loading,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={[
        "ds-button",
        `ds-button--${type}`,
        `ds-button--${size}`,
        `${loading ? "ds-button--loading" : ""}`,
      ].join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      {label && label.length ? (
        <span className="ds-button-label">{label}</span>
      ) : null}
    </button>
  );
};

export default Button;
