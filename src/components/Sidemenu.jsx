// import styles from '../App.module.css';
// import styles from './Sidemenu.module.css';
import logo from '../assets/images/logo-large.svg';
import {
  House,
  ArrowsDownUp,
  ChartDonut,
  TipJar,
  Invoice,
  ArrowFatLinesLeft,
} from '@phosphor-icons/react';

// npm install react-router-dom
import { NavLink } from 'react-router-dom';

export function Sidemenu() {
  return (
    <aside className="menu">
      <img src={logo} alt="finance logo" className="logo" />
      <nav>
        <ul>
          <li>
            {/* The isActive callback in NavLink checks if the current URL matches to="/". Since it does, it applies the active class. */}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <House className="phFill" weight="fill" size={24} />
              <span>Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <ArrowsDownUp className="phFill" weight="fill" size={24} />
              <span>Transactions</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/budgets"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <ChartDonut className="phFill" weight="fill" size={24} />
              <span>Budgets</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pots"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <TipJar className="phFill" weight="fill" size={24} />
              <span>Pots</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bills"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <Invoice className="phFill" weight="fill" size={24} />
              <span>Recurring Bills</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="#">
        <ArrowFatLinesLeft className="phFill" weight="fill" size={24} />
        <span>Minimize Menu</span>
      </NavLink>
    </aside>
  );
}
