import styles from './counter.module.scss';
import PlusIcon from '../icons/PlusIcon';
import MinusIcon from '../icons/MinusIcon';
import IconButton from '../button/IconButton';

interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
}

function Counter({ value, onChange }: CounterProps) {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value > 0 ? value - 1 : 0);

  return (
    <div className={styles['counter']}>
      <IconButton
        disabled={value === 0}
        className={styles['decrement']}
        onClick={decrement}
      >
        <MinusIcon />
      </IconButton>
      <div className={styles['count']}>{value}</div>
      <IconButton className={styles['increment']} onClick={increment}>
        <PlusIcon />
      </IconButton>
    </div>
  );
}

export default Counter;
