import { useState } from 'react';
import style from './slider.module.scss';
import NextIcon from '../icons/NextIcon';
import PreviousIcon from '../icons/PreviousIcon';

interface ImagePair {
  main: string;
  thumbnail: string;
}
interface SliderProps {
  customArrowLeftClass?: string;
  customArrowRightClass?: string;
  images: ImagePair[];
}

function Slider({
  customArrowLeftClass = '',
  customArrowRightClass = '',
  images,
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className={style['slider']}>
      <button
        onClick={goToPrevious}
        className={`${style['arrowLeft']} ${customArrowLeftClass}`}
      >
        <PreviousIcon />
      </button>
      <div className={style['mainImageContainer']}>
        <img
          className={style['mainImage']}
          src={images[currentIndex].main}
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
        {images.map((pair, index) => (
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
