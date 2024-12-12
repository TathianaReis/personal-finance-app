import transactionsStyles from './transactions.module.css';
import styles from './overview.module.css';
import { IntlProvider, FormattedNumber } from 'react-intl';

export function OverviewTransactions({ avatar, amount, name, date }) {
  const parsedDate = new Date(date);
  const optionDate = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return (
    <div className={`${transactionsStyles.transaction} flex-row`}>
      <img
        className={transactionsStyles.avatar}
        src={avatar}
        alt="transaction"
      />
      <p className={transactionsStyles['transaction-title']}>
        <b>{name}</b>
      </p>
      <div className={styles['text-wrap']}>
        <p className="fs-small-200">
          <b>
            £
            <IntlProvider locale="en-GB">
              <FormattedNumber value={amount} minimumFractionDigits={2} />
            </IntlProvider>
          </b>
        </p>
        <p className="fs-small-100">
          {parsedDate.toLocaleDateString('en-GB', optionDate)}
        </p>
      </div>
    </div>
  );
}
