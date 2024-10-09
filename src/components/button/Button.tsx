import style from "./button.module.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function Button({
  label,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={style["custom-button"]}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
