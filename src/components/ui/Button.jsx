// src/components/ui/Button.jsx
import React from "react";

export default function Button({
  type = "button",
  children,
  className = "",
  variant,
  size,
  ...props
}) {
  let baseClasses = `font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 ${className}`;

  // Size
  switch (size) {
    case "icon":
      baseClasses += " p-2 w-10 h-10 flex items-center justify-center";
      break;
    case "sm":
      baseClasses += " px-3 py-1 text-sm";
      break;
    case "lg":
      baseClasses += " px-8 py-3 text-lg";
      break;
    default:
      baseClasses += " px-6 py-2";
  }

  // Variant
  switch (variant) {
    case "ghost":
      baseClasses += " bg-transparent text-green-700 hover:bg-green-100 border border-transparent";
      break;
    case "outline":
      baseClasses += " border border-green-400 text-green-700 hover:bg-green-100";
      break;
    default:
      baseClasses += " bg-green-700 text-white hover:bg-green-800";
  }

  return (
    <button type={type} className={baseClasses} {...props}>
      {children}
    </button>
  );
}
