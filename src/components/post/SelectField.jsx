import React from "react";

export default function SelectField({ 
  label, 
  options, 
  required = false, 
  placeholder = "Select...",
  className = "w-full",
  ...props 
}) {
  return (
    <div className={className}>
      <label className="block mb-2 font-medium text-lg">
        {label}{required && "*"}
      </label>
      <select
        className="w-full p-4 border border-gray-300 rounded-lg text-lg"
        required={required}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}