/* eslint-disable react/jsx-no-constructed-context-values */
import './App.css';
import React from 'react';
import Wallet from './pages/Wallet';
import MyContext from './Context';
import Navbar from './components/Navbar';

function App() {
  const [credentials, setCredentials] = React.useState({
    name: 'John Doe',
    balance: 20000,
  });

  const [currency, setCurrency] = React.useState([
    { sign: 'USD', rate: 1 },
    { sign: 'XFA', rate: 1 },
    { sign: 'EUR', rate: 1 },
    // { sign: 'YEN', rate: 1 },
    // { sign: 'GBP', rate: 1 },
  ]);

  const [defaultBalance, setDefaultBalance] = React.useState('USD');

  return (
    <MyContext.Provider
      value={{
        credentials,
        setCredentials,
        currency,
        setCurrency,
        defaultBalance,
        setDefaultBalance,
      }}
    >
      <div className="App">
        <Navbar />
        <Wallet />
      </div>
    </MyContext.Provider>
  );
}

export default App;
