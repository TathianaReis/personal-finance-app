import dataOverview from '../assets/data/data.json';
import { OverviewTransactions } from './OverviewTransactions';
import { CaretRight } from '@phosphor-icons/react';

export function Transactions() {
  return (
    <div className="grid overview">
      <h1>Transactions</h1>
      <section>
        <div className="content-header">
          <h2>Transactions</h2>
          <a href="">
            <span>View All</span>{' '}
            <CaretRight className="phFill" weight="fill" />
          </a>
        </div>
        <div className="content">
          {dataOverview.transactions.map((transaction, index) => {
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
    </div>
  );
}

// <-- Overview
//   Transactions
//   Budgets
//   Pots
//   Recurring Bills

//   Minimize Menu

//   Search transactions

//   Sort by
//   Latest
//   Oldest
//   A to Z
//   Z to A
//   Highest
//   Lowest

//   Category
//   All Transactions
//   Entertainment
//   Bills
//   Groceries
//   Dining Out
//   Transportation
//   Personal Care
//   Education
//   Lifestyle
//   Shopping
//   General

//   Recipient/Sender
//   Category
//   Transaction Date
//   Amount -->

// <!-- Add transaction data -->

// <!-- Prev
//   Next -->
