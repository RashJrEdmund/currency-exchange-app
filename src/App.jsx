/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-no-constructed-context-values */
import './App.css';
import React from 'react';
import Wallet from './pages/Wallet';
import MyContext from './Context';
import Navbar from './components/Navbar';
// import StyledAppModal from './components/styles/Container.styled';

function App() {
  const fetchResults = {
    EUR: 1.5,
    XAF: 650.4,
    YEN: 1.2,
    GBP: 1.7,
    XOF: 2,
    AUD: 2.3,
    GYY: 10,
    NAI: 500,
  };

  const fetchKeys = ['USD', ...Object.keys(fetchResults)];

  const addedCurrencies = [...fetchKeys];

  const [start, setStart] = React.useState(0);
  setTimeout(() => {
    setStart(1);
  }, 500);

  const [credentials, setCredentials] = React.useState({
    name: 'userName',
    balance: 0,
    baseSign: 'USD',
  });

  const [currency, setCurrency] = React.useState([
    { sign: 'USD', value: 0, rate: 1, id: 0 },
    { sign: 'XFA', value: 0, rate: 1, id: 1 },
    { sign: 'EUR', value: 0, rate: 1, id: 2 },
    // { sign: 'YEN', value: 1200, rate: 1, id: 3 },
    // { sign: 'GBP', value: 70, rate: 1, id: 4 },
    // { sign: 'XOF', value: 73000, rate: 1, id: 5 },
    // { sign: 'AUD', value: 1200, rate: 1, id: 6 },
    // { sign: 'GYY', value: 70, rate: 1, id: 7 },
  ]);

  const handleFormCredentials = (sonNom, Cash) => {
    setCredentials({
      name: sonNom,
      balance: Cash,
      baseSign: 'USD',
    });

    setCurrency([
      { sign: 'USD', value: Cash, rate: 1, id: 0 },
      { sign: 'XFA', value: 0, rate: 1, id: 1 },
      { sign: 'EUR', value: 0, rate: 1, id: 2 },
    ]);
  };

  // const getTotal = () => {
  //   let results = 0;
  //   for (const i of currency) {
  //     results += i.value;
  //   }
  //   return results;
  // };

  // const TOTAL = getTotal();

  // const [defaultBalance, setDefaultBalance] = React.useState({
  //   sign: 'USD',
  //   total: TOTAL,
  // });

  return (
    <MyContext.Provider
      value={{
        credentials,
        setCredentials,
        currency,
        setCurrency,

        addedCurrencies,

        fetchResults,
        fetchKeys,
      }}
    >
      <div className="App">
        {/* <StyledAppModal>
          <div className="container">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />

            <label htmlFor="amount">Enter amount to topUP:</label>
            <input type="text" id="amount" />
          </div>
          <p>this a test message</p>
        </StyledAppModal> */}
        {credentials.name === 'userName' && (
          <div className="modal-overlay">
            <form
              className={start === 0 ? 'container' : 'container activeform'}
              onSubmit={(e) => {
                e.preventDefault();
                console.clear();
                handleFormCredentials(
                  e.target.elements.Name.value,
                  +e.target.elements.Amount.value
                );
              }}
            >
              <button className="app-done-btn" type="submit">
                Done
              </button>

              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                id="Name"
                placeholder="Enter UserName"
                required
              />

              <label htmlFor="Amount">Enter amount to topUP In USD:</label>
              <input
                type="number"
                id="Amount"
                placeholder="EnterAmount to topUP in USD"
              />
            </form>
          </div>
        )}

        <Navbar />
        <Wallet />
      </div>
    </MyContext.Provider>
  );
}

export default App;
