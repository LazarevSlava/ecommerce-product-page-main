import style from './modalSlider.module.scss';
import CloseIcon from '../icons/CloseIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalSlider({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className={style['modal-overlay']} onClick={onClose}>
      <div
        className={style['modal-content']}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseIcon className={style['modal-close']} onClick={onClose} />
      </div>
    </div>
  );
}
export default ModalSlider;
