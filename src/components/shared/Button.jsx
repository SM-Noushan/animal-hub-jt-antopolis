import React from "react";

const Button = ({ label, active = false, className: myStyles }) => {
  return (
    <button
      className={`min-w-24 h-fit sm:text-lg pl-5 sm:pl-6 pr-4 sm:pr-5 py-2.5 sm:py-3.5 rounded-full border hover:brightness-125 ${myStyles} ${
        active && "!text-green !border-green"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
