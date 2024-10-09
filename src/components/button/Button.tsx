import style from './button.module.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button({ label, ...props }: ButtonProps) {
  return (
    <button className={style['custom-button']} {...props}>
      {label}
    </button>
  );
}

export default Button;
