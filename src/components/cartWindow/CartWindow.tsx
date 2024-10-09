import style from './cartWindow.module.scss';
import Button from '../button/Button';

interface CartItem {
  id: number;
  name: string;
  price?: number;
  quantity?: number;
}
interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}

function CartWindow({ isOpen, onClose, items = [] }: CartProps) {
  if (!isOpen) return null;
  return (
    <div className={style['modal-overlay']}>
      <div className={style['modal-content']}>
        <h2>Cart</h2>
        <hr className={style['line']} />
        <div className={style['cart-content']}>
          {' '}
          {items.length > 0
            ? items.map((item) => <p key={item.id}>{item.name}</p>)
            : 'Your cart is empty'}
        </div>
        <div>
          {items.length === 0 ? (
            ''
          ) : (
            <Button label="Checkout" onClick={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}
export default CartWindow;
