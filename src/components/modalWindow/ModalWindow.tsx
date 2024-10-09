import React from "react";
import style from "./modalWindow.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function ModalWindow({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <>
      <div className={style["modal-overlay"]} onClick={onClose}>
        <div
          className={style["modal-content"]}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={style["modal-close"]} onClick={onClose}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
export default ModalWindow;
