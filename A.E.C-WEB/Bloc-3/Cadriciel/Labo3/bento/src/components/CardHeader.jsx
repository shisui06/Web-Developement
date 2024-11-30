// src/components/CardHeader.jsx
import React from 'react';

const CardHeader = ({ title, icon }) => {
  return (
    <div className="flex items-center mb-4">
      {icon && <span className="mr-2">{icon}</span>}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default CardHeader;
