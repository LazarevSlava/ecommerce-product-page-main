import { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClass?: string;
}

function IconButton({ customClass = '', children, ...props }: IconButtonProps) {
  return (
    <button className={`${customClass}`} {...props}>
      {children}
    </button>
  );
}

export default IconButton;
