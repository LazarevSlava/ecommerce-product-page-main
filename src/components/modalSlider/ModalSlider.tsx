import style from './modalSlider.module.scss';
import CloseIcon from '../../assets/images/icon-close.svg';
import Slider from '../slider/Slider';
import { useAppSelector } from '../../hook';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalSlider({ isOpen, onClose }: ModalProps) {
  const products = useAppSelector((state) => state.products.products);

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
