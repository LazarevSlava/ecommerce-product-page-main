import styles from './cartItem.module.scss';
import Wastebasket from '../icons/Wastebasket';

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  onRemove: () => void;
}
function CartItem({ image, name, price, quantity, onRemove }: CartItemProps) {
  const total = price * quantity;
  return (
    <div className={styles.cartItem}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>
          ${price.toFixed(2)} x {quantity}{' '}
          <span className={styles.total}>${total.toFixed(2)}</span>
        </p>
      </div>

      <Wastebasket onClick={onRemove} className={styles.removeButton} />
    </div>
  );
}
export default CartItem;
