import AboutItem from '../aboutItem/AboutItem';
import Slider from '../slider/Slider';
import style from './viewOfItem.module.scss';
import { product } from '../../productData/productData';

function ViewOfItem() {
  return (
    <div className={style['main']}>
      <Slider images={product.images} />
      <AboutItem />
    </div>
  );
}
export default ViewOfItem;
