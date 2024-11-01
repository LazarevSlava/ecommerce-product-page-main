import React from 'react';
import style from './modalWindow.module.scss';
import CloseIcon from '../../assets/images/icon-close.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function ModalWindow({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className={style['modal-overlay']} onClick={onClose}>
      <div
        className={style['modal-content']}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseIcon className={style['modal-close']} onClick={onClose} />

        {children}
      </div>
    </div>
  );
}
export default ModalWindow;
