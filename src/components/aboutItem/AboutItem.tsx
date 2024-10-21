import { useState } from 'react';
import styles from './aboutItem.module.scss';
import Button from '../button/Button';
import Counter from '../counter/Counter';
import CartIcon from '../icons/CartIcon';

function AboutItem() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles['product']}>
      <h1 className={styles['brand']}>Sneaker Company</h1>
      <h2 className={styles['productTitle']}>Fall Limited Edition Sneakers</h2>
      <p className={styles['description']}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className={styles['priceSection']}>
        <div className={styles['priceMain']}>
          <span className={styles['price']}>$125.00</span>
          <span className={styles['discount']}>50%</span>
        </div>
        <span className={styles['originalPrice']}>$250.00</span>
      </div>

      <div className={styles['actions']}>
        <Counter />
        <Button onClick={() => setCount(count)}>
          <CartIcon fill={'black'} className={styles['cartIcon']} />
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default AboutItem;
