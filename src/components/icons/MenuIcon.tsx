import React from 'react';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill="#69707D"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default MenuIcon;
