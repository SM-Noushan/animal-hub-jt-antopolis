import React from "react";

const CommonInput = ({ name, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="p-4 bg-gray rounded-lg w-full placeholder:text-black"
      required
    />
  );
};

export default CommonInput;
