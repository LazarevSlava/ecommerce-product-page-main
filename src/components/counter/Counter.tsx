import { useState } from 'react';
import styles from './counter.module.scss';
import PlusIcon from '../icons/PlusIcon';
import MinusIcon from '../icons/MinusIcon';

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
      <button className={styles['decrement']} onClick={decrement}>
        <MinusIcon />
      </button>
      <div className={styles['count']}>{count}</div>
      <button className={styles['increment']} onClick={increment}>
        <PlusIcon />
      </button>
    </div>
  );
}

export default Counter;
