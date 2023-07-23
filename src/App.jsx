/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-alert */
import './App.css';
import React, { useEffect } from 'react';
import Wallet from './pages/Wallet';
import MyContext from './Context';
import Navbar from './components/Navbar';

import Fetchdata, { BackUpFetchData } from './data/Fetchdata';
import Form from './components/Form';

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
          alert(
            'Unable to fetch data, Resolving to BackUpData (BackUpData is not upToDate)'
          );

          setFetchResulst(BackUpFetchData);
        } else {
          setFetchResulst(res);
        }
      })
      .catch(() => {
        setFetchResulst(BackUpFetchData);
        alert(
          'Unable to fetch data Resolving to BackUpData (BackUpData is not upToDate)'
        );
      });
  }, []);

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

  const [openMenu, setOpenMenu] = React.useState(false);

  const handleFormCredentials = (sonNom, Cash) => {
    if (Cash < 0) {
      alert('Cannot topUP negative funds');
      return;
    }
    const FROM = credentials.baseSign;

    const CASH = (Cash / fetchResults[FROM]) * fetchResults[FROM];

    setCredentials({
      name: sonNom,
      balance: credentials.balance + CASH,
      baseSign: credentials.baseSign,
    });

    setAddedCurr(() => {
      // const HOLDER = addedCurr;
      // the mapping below is a super matured way of looping and adding CASH

      const HOLDER = addedCurr.map((cur) => {
        if (cur.sign === credentials.baseSign) {
          return { ...cur, amount: cur.amount + CASH };
        }

        return cur;
      });

      return [...HOLDER];
    });

    toggleTopUpForm();
  };

  useEffect(() => {
    if (showForm) {
      document.body.classList.add('hidden-body');
    } else {
      document.body.classList.remove('hidden-body');
    }
  }, [showForm]);

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

        openMenu,
        setOpenMenu,
      }}
    >
      <div className="App">
        {showForm && <Form handleFormCredentials={handleFormCredentials} />}

        <Navbar />
        <Wallet />
      </div>
    </MyContext.Provider>
  );
}

export default App;
