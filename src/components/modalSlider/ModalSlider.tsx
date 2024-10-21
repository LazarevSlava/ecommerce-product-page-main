import style from './modalSlider.module.scss';
import CloseIcon from '../icons/CloseIcon';
import Slider from '../slider/Slider';

import img1Main from '../../assets/images/image-product-1.jpg';
import img1Thumb from '../../assets/images/image-product-1-thumbnail.jpg';
import img2Main from '../../assets/images/image-product-2.jpg';
import img2Thumb from '../../assets/images/image-product-2-thumbnail.jpg';
import img3Main from '../../assets/images/image-product-3.jpg';
import img3Thumb from '../../assets/images/image-product-3-thumbnail.jpg';
import img4Main from '../../assets/images/image-product-4.jpg';
import img4Thumb from '../../assets/images/image-product-4-thumbnail.jpg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const product = {
  id: 1,
  name: 'Product 1',
  images: [
    { main: img1Main, thumbnail: img1Thumb },
    { main: img2Main, thumbnail: img2Thumb },
    { main: img3Main, thumbnail: img3Thumb },
    { main: img4Main, thumbnail: img4Thumb },
  ],
};

function ModalSlider({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={style['modal-overlay']}>
      <div
        className={style['modal-content']}
        onClick={(e) => e.stopPropagation()}
      >
        <Slider
          images={product.images}
          customArrowLeftClass={style['custom-left']}
          customArrowRightClass={style['custom-right']}
        />
      </div>
      <CloseIcon className={style['modal-close']} onClick={onClose} />
    </div>
  );
}
export default ModalSlider;
