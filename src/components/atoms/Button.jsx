import React from "react";

function Button({ type, text, onClick }) {
  return (
    <button
      type={type}
      className="my-4 bg-customBlue text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
