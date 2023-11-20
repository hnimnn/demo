import React, { useState, useEffect, useRef } from "react";
import "./PrimaryButton.scss";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} id="primary-button">
      {children}
    </button>
  );
};

export default PrimaryButton;
