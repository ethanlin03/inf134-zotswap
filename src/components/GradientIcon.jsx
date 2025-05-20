import React from "react";

const GradientIcon = ({ icon, className = "" }) => {
    return (
        <div className={className}>
            <svg style={{ height: 0, width: 0 }}>
                <defs>
                <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0064A4" />
                    <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
                </defs>
            </svg>
            {React.cloneElement(icon, {
                stroke: "url(#myGradient)",
                size: 24,
            })}
        </div>
    )
};

export default GradientIcon;