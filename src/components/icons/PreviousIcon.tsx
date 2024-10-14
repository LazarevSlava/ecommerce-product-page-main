import React from 'react';

const PreviousIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 1 3 9l8 8"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};
export default PreviousIcon;
