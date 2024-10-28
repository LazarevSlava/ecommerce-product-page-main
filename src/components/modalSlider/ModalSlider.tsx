import style from './modalSlider.module.scss';
import CloseIcon from '../icons/CloseIcon';
import Slider from '../slider/Slider';
import { products } from '../../productData/productData';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalSlider({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={style['modal-overlay']}>
      <div
        className={style['modal-content']}
        onClick={(e) => e.stopPropagation()}
      >
        <Slider
          images={products[0].images}
          customArrowLeftClass={style['custom-left']}
          customArrowRightClass={style['custom-right']}
        />
      </div>
      <CloseIcon className={style['modal-close']} onClick={onClose} />
    </div>
  );
}
export default ModalSlider;
