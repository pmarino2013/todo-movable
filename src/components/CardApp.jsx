import React from "react";

const CardApp = ({ texto, color }) => {
  return (
    <div
      className={`max-w-sm mx-auto ${color} rounded-lg shadow-md overflow-hidden`}
    >
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{texto.text}</p>
      </div>
    </div>
  );
};

export default CardApp;
