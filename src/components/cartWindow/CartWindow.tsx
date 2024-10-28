import style from './cartWindow.module.scss';
import Button from '../button/Button';
import CartItem from '../cartItem/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeItemFromCart } from '../../slices/cartSlice';

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  onRemove: () => void;
}
interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}

function CartWindow({ isOpen, onClose }: CartProps) {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  if (!isOpen) return null;
  return (
    <div className={style['modal-overlay']}>
      <div className={style['modal-content']}>
        <h2>Cart</h2>
        <hr className={style['line']} />
        <div className={style['cart-content']}>
          {' '}
          {items.length > 0
            ? items.map((item) => (
                <CartItem
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onRemove={() => handleRemove(item.id)}
                />
              ))
            : 'Your cart is empty'}
        </div>
        <div>
          {items.length > 0 && <Button onClick={onClose}>Checkout</Button>}
        </div>
      </div>
    </div>
  );
}
export default CartWindow;
