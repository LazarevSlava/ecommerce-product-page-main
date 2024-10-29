import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../slices/cartSlice';
import { setQuantityProduct } from '../../slices/quantityCartProductSlice';
import styles from './aboutItem.module.scss';
import Button from '../button/Button';
import Counter from '../counter/Counter';
import CartIcon from '../icons/CartIcon';
import { RootState } from '../../store';

interface AboutItemProps {
  name: string;
  price: number;
  image: string;
  id: number;
}

function AboutItem({ id, name, price, image }: AboutItemProps) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = () => {
    if (count === 0) return;
    const isProductInCart = cartItems.some((item) => item.id === id);
    if (!isProductInCart) {
      dispatch(setQuantityProduct(cartItems.length + 1));
    }
    dispatch(
      addItemToCart({
        id: 1,
        name,
        price,
        quantity: count,
        image,
      }),
    );
  };

  return (
    <div className={styles['product']}>
      <h1 className={styles['brand']}>Sneaker Company</h1>
      <h2 className={styles['productTitle']}>{name}</h2>
      <p className={styles['description']}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className={styles['priceSection']}>
        <div className={styles['priceMain']}>
          <span className={styles['price']}>${price.toFixed(2)}</span>
          <span className={styles['discount']}>50%</span>
        </div>
        <span className={styles['originalPrice']}>$250.00</span>
      </div>

      <div className={styles['actions']}>
        <Counter value={count} onChange={setCount} />
        <Button onClick={handleAddToCart}>
          <CartIcon fill={'black'} className={styles['cartIcon']} />
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default AboutItem;
