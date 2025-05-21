import React from "react";

const FilterIcon = ({ icon, label, isActive, handleClick }) => {
    return (
        <div className={`flex flex-row space-x-4 px-4 py-2 rounded-md shadow-md cursor-pointer transition-all duration-100 ${
                isActive ? "bg-[#0064A4] text-white" : "bg-white border-2 border-[#0064A4] text-[#0064A4]"
            }`}
            onClick={handleClick}
        >
            {React.cloneElement(icon, {
                size: 24,
                className: isActive ? "text-[#FFD200]" : "text-[#0064A4]"
            })}
            <span className="font-semibold">
                {label}
            </span>
        </div>
    );
};

export default FilterIcon;