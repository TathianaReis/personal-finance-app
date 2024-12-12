import './global.css';
// import './App.module.css';
import { Sidemenu } from './components/Sidemenu.jsx';
import { Overview } from './components/Overview.jsx';
import { Transactions } from './components/Transactions.jsx';

//import { data } from './assets/data/data.json';
/**
 * 
 * import { Pots } from './components/Pots.jsx';
import { Budgets } from './components/Budgets.jsx';
import { Bills } from './components/Bills.jsx';

 */

//npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={'wrapper'}>
        <Sidemenu />
        <main>
          {/* <Overview />*/}
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
          {/*
            <Route path="/pots" element={<Pots />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/bills" element={<Bills />} />         
          */}
        </main>
      </div>
    </Router>
  );
}

export default App;
