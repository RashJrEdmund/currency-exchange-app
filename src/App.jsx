/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-no-constructed-context-values */
import './App.css';
import React from 'react';
import Wallet from './pages/Wallet';
import MyContext from './Context';
import Navbar from './components/Navbar';

import Fetchdata, { BackUpFetchData } from './data/Fetchdata';

function App() {
  const [fetchResults, setFetchResulst] = React.useState({
    USD: 1,
    EUR: 0.935,
    XAF: 614.3,
    JPY: 131.42,
    GBP: 0.83,
    XOF: 612.9,
    AUD: 1.45,
    GYD: 210.92,
    NGN: 459.49,
    GHN: 12.2,
    SGD: 1.33,
  });

  const fetchKeys = [...Object.keys(fetchResults)];

  React.useEffect(() => {
    Fetchdata()
      .then((res) => {
        if (res.USD !== 1 && typeof res !== 'object') {
          // meaning if results not found setFetch... shld set to BackupFetc...

          setFetchResulst(BackUpFetchData);
        } else {
          setFetchResulst(res);
        }
      })
      .catch(() => {
        setFetchResulst(BackUpFetchData);
      });
  }, []);

  const [start, setStart] = React.useState(0);
  setTimeout(() => {
    setStart(1);
  }, 500);

  const [credentials, setCredentials] = React.useState({
    name: 'userName',
    balance: 0,
    baseSign: 'USD',
  });

  const [showForm, setShowForm] = React.useState(true);

  const toggleTopUpForm = () => {
    setShowForm((prev) => !prev);
  };

  const [addedCurr, setAddedCurr] = React.useState([
    { sign: 'USD', amount: 0, id: 0 },
    { sign: 'XAF', amount: 0, id: 1 },
    { sign: 'EUR', amount: 0, id: 2 },
  ]);

  const handleFormCredentials = (sonNom, Cash) => {
    const FROM = credentials.baseSign;

    const CASH = (Cash / fetchResults[FROM]) * fetchResults[FROM];

    setCredentials({
      name: sonNom,
      balance: credentials.balance + CASH,
      baseSign: credentials.baseSign,
    });

    setAddedCurr(() => {
      const HOLDER = addedCurr;

      for (const i of HOLDER) {
        if (i.sign === credentials.baseSign) {
          i.amount += CASH;
        }
      }

      return [...HOLDER];
    });

    toggleTopUpForm();
  };

  return (
    <MyContext.Provider
      value={{
        fetchResults,

        credentials,
        setCredentials,

        addedCurr,
        setAddedCurr,

        fetchKeys,
        toggleTopUpForm,
      }}
    >
      <div className="App">
        {showForm && (
          <div className="modal-overlay">
            <form
              className={start === 0 ? 'container' : 'container activeform'}
              onSubmit={(e) => {
                e.preventDefault();
                handleFormCredentials(
                  e.target.elements.Name.value,
                  +e.target.elements.Amount.value
                );
              }}
            >
              <button className="app-done-btn" type="submit">
                Done
              </button>

              <p>Confirm Credentials</p>
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                id="Name"
                placeholder="Enter UserName"
                defaultValue={
                  credentials.name === 'userName' ? undefined : credentials.name
                }
                required
              />

              <label htmlFor="Amount">
                Enter amount to topUP In {credentials.baseSign}:
              </label>
              <input
                type="number"
                step="any"
                id="Amount"
                placeholder={`EnterAmount to topUP in ${credentials.baseSign}`}
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
