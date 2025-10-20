// src/components/ui/Label.jsx
import React from "react";

export default function Label({ htmlFor, children, className = "", variant }) {
  let baseClasses = "block font-medium text-gray-700";

  // Variant styling
  switch (variant) {
    case "green":
      baseClasses += " text-green-700";
      break;
    case "red":
      baseClasses += " text-red-600";
      break;
    default:
      baseClasses += " text-gray-700";
  }

  return (
    <label htmlFor={htmlFor} className={`${baseClasses} ${className}`}>
      {children}
    </label>
  );
}
