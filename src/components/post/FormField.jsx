import React from "react";

export default function FormField({ 
  label, 
  type = "text", 
  placeholder, 
  required = false, 
  className = "w-4/5",
  ...props 
}) {
  return (
    <div className={className}>
      <label className="block mb-2 font-medium text-lg">
        {label}{required && "*"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-4 border border-gray-300 rounded-lg text-lg"
        required={required}
        {...props}
      />
    </div>
  );
}