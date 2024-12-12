import billsStyles from './bills.module.css';
import styles from './overview.module.css';
import { IntlProvider, FormattedNumber } from 'react-intl';

export function OverviewBills({ paid, upcoming, due }) {
  return (
    <>
      <div className="beige-box flex-row">
        <p className={billsStyles['bill-title']}>Paid Bills</p>
        <div className={styles['text-wrap']}>
          <p className="fs-small-200">
            <b>
              {' '}
              £
              <IntlProvider locale="en-GB">
                <FormattedNumber value={paid} minimumFractionDigits={2} />
              </IntlProvider>
            </b>
          </p>
        </div>
      </div>
      <div className="beige-box flex-row">
        <p className={billsStyles['bill-title']}>Total Upcoming</p>
        <div className={styles['text-wrap']}>
          <p className="fs-small-200">
            <b>
              {' '}
              £
              <IntlProvider locale="en-GB">
                <FormattedNumber value={upcoming} minimumFractionDigits={2} />
              </IntlProvider>
            </b>
          </p>
        </div>
      </div>
      <div className="beige-box flex-row">
        <p className={billsStyles['bill-title']}>Due Soon</p>
        <div className={styles['text-wrap']}>
          <p className="fs-small-200">
            <b>
              £
              <IntlProvider locale="en-GB">
                <FormattedNumber value={due} minimumFractionDigits={2} />
              </IntlProvider>
            </b>
          </p>
        </div>
      </div>
    </>
  );
}
