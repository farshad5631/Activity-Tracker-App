import React from "react";

function Input({ type, name, placeholder, value, onChange }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-customGrayLight rounded-md my-2 p-2 w-full"
      />
    </div>
  );
}

export default Input;
