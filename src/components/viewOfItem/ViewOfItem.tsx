import AboutItem from '../aboutItem/AboutItem';
import Slider from '../slider/Slider';
import style from './viewOfItem.module.scss';

import img1Main from '../../assets/images/image-product-1.jpg';
import img1Thumb from '../../assets/images/image-product-1-thumbnail.jpg';
import img2Main from '../../assets/images/image-product-2.jpg';
import img2Thumb from '../../assets/images/image-product-2-thumbnail.jpg';
import img3Main from '../../assets/images/image-product-3.jpg';
import img3Thumb from '../../assets/images/image-product-3-thumbnail.jpg';
import img4Main from '../../assets/images/image-product-4.jpg';
import img4Thumb from '../../assets/images/image-product-4-thumbnail.jpg';

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

function ViewOfItem() {
  return (
    <div className={style['main']}>
      <Slider images={product.images} />
      <AboutItem />
    </div>
  );
}
export default ViewOfItem;
