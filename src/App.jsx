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
  const [start, setStart] = React.useState(0);
  setTimeout(() => {
    setStart(1);
  }, 500);

  const [credentials, setCredentials] = React.useState({
    name: 'userName',
    balance: 0,
  });

  const [currency, setCurrency] = React.useState([
    { sign: 'USD', value: 5000, rate: 1, id: 0 },
    { sign: 'XFA', value: 15000, rate: 1, id: 1 },
    { sign: 'EUR', value: 73000, rate: 1, id: 2 },
    { sign: 'YEN', value: 1200, rate: 1, id: 3 },
    { sign: 'GBP', value: 70, rate: 1, id: 4 },
    { sign: 'XOF', value: 73000, rate: 1, id: 5 },
    { sign: 'AUD', value: 1200, rate: 1, id: 6 },
    { sign: 'GYY', value: 70, rate: 1, id: 7 },
  ]);

  const handleFormCredentials = (sonNom, Cash) => {
    setCredentials({
      name: sonNom,
      balance: Cash,
    });
  };

  const getTotal = () => {
    let results = 0;
    for (const i of currency) {
      results += i.value;
    }
    return results;
  };

  const TOTAL = getTotal();

  const [defaultBalance, setDefaultBalance] = React.useState({
    sign: 'USD',
    total: TOTAL,
  });

  // const reduceCurrency = () => {
  //   return currency.reduce((accumulator, eachObj, counter) => {
  //     console.log('this the accumulator', accumulator);
  //     console.log('this is the eachObj', eachObj);
  //     console.log('this is third param', counter);
  //     // currency[counter - 1].value +=
  //     return accumulator + eachObj.value;
  //   });
  // };
  // console.log('this the results of reduceCurrency', reduceCurrency());

  // // console.log('this is reduceCurrency', reduceCurrency());

  return (
    <MyContext.Provider
      value={{
        credentials,
        setCredentials,
        currency,
        setCurrency,
        defaultBalance,
        setDefaultBalance,

        getTotal,
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
                  e.target.elements.Amount.value
                );
              }}
            >
              <button className="delet-popUp" type="submit">
                Done
              </button>

              <label htmlFor="Name">Name:</label>
              <input type="text" id="Name" placeholder="Enter UserName" />

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
