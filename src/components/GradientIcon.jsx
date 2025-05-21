import React from "react";

const GradientIcon = ({ icon, className = "", filled = false }) => {
  const styledIcon = React.cloneElement(icon, {
    size: 24,
    style: filled ? {
        fill: "url(#myGradient)",
        stroke: "url(#myGradient)",
    } : {
        fill: "none",
        stroke: "url(#myGradient)",
    },
  });

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
      {styledIcon}
    </div>
  );
};

export default GradientIcon;
