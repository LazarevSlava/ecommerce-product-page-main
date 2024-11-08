import AboutItem from '../aboutItem/AboutItem';
import Slider from '../slider/Slider';
import style from './viewOfItem.module.scss';
import { useAppSelector } from '../../hook';

function ViewOfItem() {
  const products = useAppSelector((state) => state.products.products);
  const selectedProductId = useAppSelector(
    (state) => state.products.selectedProductId,
  );
  const selectedProduct = products.find(
    (products) => products.id === selectedProductId,
  );
  if (!selectedProduct) return null;

  return (
    <div className={style['main']}>
      <Slider images={selectedProduct.images} />
      <AboutItem
        id={selectedProduct.id}
        name={selectedProduct.name}
        price={selectedProduct.price}
        image={selectedProduct.images[0].main}
      />
    </div>
  );
}
export default ViewOfItem;
