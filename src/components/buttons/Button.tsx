"use client";

import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  borderRadius = "rounded-full",
  className = "",
  ...props
}) => {
  const baseClass = "px-4 py-2 font-semibold focus:outline-none";
  const primaryClass = "bg-blue-500 text-white hover:bg-blue-600";
  const secondaryClass = "bg-gray-200 text-gray-800 hover:bg-gray-300";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      {...props}
      className={`${baseClass} ${borderRadius} ${
        variant === "primary" ? primaryClass : secondaryClass
      } ${widthClass} ${className}`}
      style={{padding: '0.75rem'}}
    >
      {children}
    </button>
  );
};

export default Button;