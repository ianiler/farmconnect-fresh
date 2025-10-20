// src/components/ui/Input.jsx
import React from "react";

export default function Input({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  variant,
  ...props
}) {
  let baseClasses = `w-full px-4 py-2 rounded-xl text-gray-700 focus:outline-none focus:ring-2`;

  // Variant styling
  switch (variant) {
    case "green":
      baseClasses += ` border border-green-300 focus:ring-green-500`;
      break;
    case "outline":
      baseClasses += ` border border-gray-400 focus:ring-gray-500`;
      break;
    default:
      baseClasses += ` border border-gray-300 focus:ring-green-500`;
  }

  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
}
