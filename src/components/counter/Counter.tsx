import { useState } from 'react';
import styles from './counter.module.scss';
import PlusIcon from '../icons/PlusIcon';
import MinusIcon from '../icons/MinusIcon';
import IconButton from '../button/IconButton';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className={styles['counter']}>
      <IconButton
        disabled={count === 0}
        className={styles['decrement']}
        onClick={decrement}
      >
        <MinusIcon />
      </IconButton>
      <div className={styles['count']}>{count}</div>
      <IconButton className={styles['increment']} onClick={increment}>
        <PlusIcon />
      </IconButton>
    </div>
  );
}

export default Counter;
