//npm install date-fns
import { parseISO, addDays, isAfter, isBefore } from 'date-fns';

//npm install react-intl
import { IntlProvider, FormattedNumber } from 'react-intl';

//npm install classnames
import styles from './overview.module.css';
import budgetsStyles from './budgets.module.css';
import billsStyles from './bills.module.css';
import dataOverview from '../assets/data/data.json';
import { TransactionInfo } from './TransactionInfo';
import { OverviewTransactions } from './OverviewTransactions';
import { OverviewBills } from './OverviewBills';

//npm install @phosphor-icons/react
import { CaretRight, TipJar } from '@phosphor-icons/react';

export function Overview() {
  const todaysDate = new Date();
  const twoDaysAhead = addDays(todaysDate, 2);
  const dataDate = (date) => parseISO(date);
  const isPaidBill = (date) => isAfter(todaysDate, dataDate(date));
  const isDueBill = (date) =>
    isAfter(dataDate(date), todaysDate) &&
    isBefore(dataDate(date), twoDaysAhead);
  const isUpcomingBill = (date) => isAfter(dataDate(date), todaysDate);

  //isAfter check (firstDate is after secondDate)

  const totalPotSaved = dataOverview.pots.reduce(
    (sum, pot) => sum + pot.total,
    0
  );

  const paidBills = dataOverview.transactions
    .filter(
      (transaction) =>
        transaction.category.toLowerCase() === 'bills' &&
        isPaidBill(transaction.date)
    )
    .reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);
  // Math.abs -> Give me the absolute value of the calculation (sum of all paid bills which will be a negative value e.g: -90 Dinner, -50 lunch...)

  const upcomingBills = dataOverview.transactions
    .filter(
      (transaction) =>
        transaction.category.toLowerCase() === 'bills' &&
        isUpcomingBill(transaction.date)
    )
    .reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);

  const dueSoonBills = dataOverview.transactions
    .filter(
      (transaction) =>
        transaction.category.toLowerCase() === 'bills' &&
        isDueBill(transaction.date)
    )
    .reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);

  // console.log('Paid Bills:', paidBills);
  // console.log('Upcoming Bills:', upcomingBills);
  // console.log('Due soon Bills:', dueSoonBills);

  return (
    <>
      <h1>Overview</h1>
      <div className="grid overview">
        <section className="summary">
          <p className="fs-small-200">Current Balance</p>
          <p className="fs-large-200">
            £
            <IntlProvider locale="en-GB">
              <FormattedNumber
                value={dataOverview.balance.current}
                minimumFractionDigits={2}
              />
            </IntlProvider>
          </p>
        </section>
        <section className="summary">
          <p className="fs-small-200">Income</p>
          <p className="fs-large-200">
            £
            <IntlProvider locale="en-GB">
              <FormattedNumber
                value={dataOverview.balance.income}
                minimumFractionDigits={2}
              />
            </IntlProvider>
          </p>
        </section>
        <section className="summary">
          <p className="fs-small-200">Expenses</p>
          <p className="fs-large-200">
            £
            <IntlProvider locale="en-GB">
              <FormattedNumber
                value={dataOverview.balance.expenses}
                minimumFractionDigits={2}
              />
            </IntlProvider>
          </p>
        </section>
        <section className="pots">
          <div className="content-header">
            <h2>Pots</h2>
            <a href="">
              <span>See Details</span>
              <CaretRight className="phFill" weight="fill" />
            </a>
          </div>
          <div className={`${styles.content} flex-row`}>
            <div className={`${styles['total-saved']} beige-box flex-row`}>
              <TipJar className="phLight" weight="light" size={40} />
              <div className={styles['text-wrap']}>
                <p className="fs-small-200">Total Saved</p>
                <p className="fs-large-200">
                  <b>
                    {' '}
                    £
                    <IntlProvider locale="en-GB">
                      <FormattedNumber
                        value={totalPotSaved}
                        minimumFractionDigits={2}
                      />
                    </IntlProvider>
                  </b>
                </p>
              </div>
            </div>
            <div className={styles.savings}>
              {dataOverview.pots.map((pot, index) => {
                if (index < 4)
                  return (
                    <TransactionInfo
                      key={index}
                      name={pot.name}
                      total={pot.total}
                      style={{ '--theme-color': pot.theme }}
                    />
                  );
              })}
            </div>
          </div>
        </section>
        <section className="transactions">
          <div className="content-header">
            <h2>Transactions</h2>
            <a href="">
              <span>View All</span>{' '}
              <CaretRight className="phFill" weight="fill" />
            </a>
          </div>
          <div className="content">
            {dataOverview.transactions.map((transaction, index) => {
              if (index < 5)
                return (
                  <OverviewTransactions
                    key={index}
                    avatar={transaction.avatar}
                    amount={transaction.amount}
                    name={transaction.name}
                    date={transaction.date}
                  />
                );
            })}
          </div>
        </section>
        <section className="budgets">
          <div className="content-header">
            <h2>Budgets</h2>
            <a href="">
              <span>See Details</span>{' '}
              <CaretRight className="phFill" weight="fill" />
            </a>
          </div>
          <div className={`${budgetsStyles.content} flex-row`}>
            <div className={budgetsStyles['chart-wrap']}>
              <div className={budgetsStyles.chart}>
                <div className={budgetsStyles['child-chart']}>
                  <div className={budgetsStyles['chart-text']}>
                    <p className="fs-large-200">
                      <b>£338</b>
                    </p>
                    <p className="fs-small-200">of £975 limit</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.savings} budget`}>
              {dataOverview.budgets.map((budget, index) => {
                if (index < 4)
                  return (
                    <TransactionInfo
                      key={index}
                      name={budget.category}
                      total={budget.maximum}
                      style={{ '--theme-color': budget.theme }}
                    />
                  );
              })}
            </div>
          </div>
        </section>

        <section className="bills">
          <div className="content-header">
            <h2>Recurring Bills</h2>
            <a href="">
              <span>See Details</span>
              <CaretRight className="phFill" weight="fill" />
            </a>
          </div>
          <div className={`${billsStyles.content} flex-column`}>
            <OverviewBills
              paid={paidBills}
              upcoming={upcomingBills}
              due={dueSoonBills}
            />
          </div>
        </section>
      </div>
    </>
  );
}
