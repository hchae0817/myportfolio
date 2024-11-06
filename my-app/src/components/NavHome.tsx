import React, { useState } from 'react';

const NavHome = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <nav className="relative">
      {/* Navigation Icon */}
      <a
        href="/"
        onMouseEnter={() => setIsTooltipVisible(true)} 
        onMouseLeave={() => setIsTooltipVisible(false)} 
        className="text-gray-600 hover:text-blue-600 text-xl"
      >
        🛖
      </a>

      {/* Tooltip */}
      {isTooltipVisible && (
        <div
          role="tooltip"
          className="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700"
          style={{
            top: '100%', 
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Home
          <div
            className="tooltip-arrow"
            style={{
              position: 'absolute',
              top: '-4px',
              left: '50%',
              transform: 'translateX(-50%)',
              borderWidth: '6px',
              borderColor: 'transparent transparent #333 transparent',
            }}
          ></div>
        </div>
      )}
    </nav>
  );
};

export default NavHome;
