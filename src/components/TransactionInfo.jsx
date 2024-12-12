import styles from './overview.module.css';

export function TransactionInfo({ name, total, style }) {
  return (
    <div
      className={`${styles['text-wrap']} ${styles['transaction-info']}`}
      style={style}
    >
      <p className="fs-small-100">{name}</p>
      <p className="fs-small-200">
        <b>£{total.toFixed(2)}</b>
      </p>
    </div>
  );
}
