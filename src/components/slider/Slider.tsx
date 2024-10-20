import { useState } from 'react';
import style from './slider.module.scss';

import NextIcon from '../icons/NextIcon';
import PreviousIcon from '../icons/PreviousIcon';

import img1Main from '../../assets/images/image-product-1.jpg';
import img1Thumb from '../../assets/images/image-product-1-thumbnail.jpg';
import img2Main from '../../assets/images/image-product-2.jpg';
import img2Thumb from '../../assets/images/image-product-2-thumbnail.jpg';
import img3Main from '../../assets/images/image-product-3.jpg';
import img3Thumb from '../../assets/images/image-product-3-thumbnail.jpg';
import img4Main from '../../assets/images/image-product-4.jpg';
import img4Thumb from '../../assets/images/image-product-4-thumbnail.jpg';

interface ImagePair {
  main: string;
  thumbnail: string;
}
interface SliderProps {
  customArrowLeftClass?: string;
  customArrowRightClass?: string;
}

const imagePair: ImagePair[] = [
  { main: img1Main, thumbnail: img1Thumb },
  { main: img2Main, thumbnail: img2Thumb },
  { main: img3Main, thumbnail: img3Thumb },
  { main: img4Main, thumbnail: img4Thumb },
];

function Slider({
  customArrowLeftClass = '',
  customArrowRightClass = '',
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? imagePair.length - 1 : currentIndex - 1,
    );
  };
  const goToNext = () => {
    setCurrentIndex(
      currentIndex === imagePair.length - 1 ? 0 : currentIndex + 1,
    );
  };
  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className={style['slider']}>
      <button
        onClick={goToPrevious}
        className={`${style['arrowLeft']} ${customArrowLeftClass}  `}
      >
        <PreviousIcon />
      </button>
      <div className={style['mainImageContainer']}>
        <img
          className={style['mainImage']}
          src={imagePair[currentIndex].main}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>
      <button
        className={`${style['arrowRight']} ${customArrowRightClass}`}
        onClick={goToNext}
      >
        <NextIcon />
      </button>
      <div className={style['thumbnailContainer']}>
        {imagePair.map((pair, index) => (
          <img
            key={index}
            src={pair.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => goToImage(index)}
            className={`${style.thumbnail} ${index === currentIndex ? style.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
