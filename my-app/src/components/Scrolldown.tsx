import React from "react";


interface ScrollDownProps {
  onClick: () => void;
  color?: string;
}

const ScrollDown: React.FC<ScrollDownProps> = ({ onClick, color = 'text-foreground' }) => (
  <div
    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`h-8 w-8 md:h-10 md:w-10 text-${color} animate-bounce`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  </div>
);

export default ScrollDown;