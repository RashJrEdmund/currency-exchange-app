/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import StyledContainer from '../components/styles/Container.styled';
import delIcon from '../images/close menu icon.png';
import MyContext from '../Context';

export default function Wallet() {
  const { fetchResults, credentials, addedCurr, setAddedCurr } =
    React.useContext(MyContext);

  const [showForm, setShowForm] = React.useState(false);
  const [convertTo, setConvertTo] = React.useState({
    amount: 0,
    from: credentials.baseSign,
  });

  const handleDelete = (ID, delBtnSign, deletedAmount = 0) => {
    const holder = addedCurr;
    const newHolder = holder.filter(({ id }) => id !== ID);
    setAddedCurr([...newHolder]);

    if (deletedAmount > 0) {
      setAddedCurr((prevCurr) => {
        // here i'm converting the deleted amount and adding it to the baseCurrency

        const HOLDER = prevCurr.map((curr) => {
          if (credentials.baseSign === curr.sign) {
            const RESULTS =
              (deletedAmount / fetchResults[delBtnSign]) *
              fetchResults[credentials.baseSign];

            return { ...curr, amount: curr.amount + RESULTS };
          }

          return curr;
        });

        return [...HOLDER];
      });

      alert(`${delBtnSign} card's amount added to default currency`);
    }
  };

  const handleFormInputChange = (amnt) => {
    if (amnt < 0) {
      alert('Error! will not convert negative funds');
      return;
    }
    setConvertTo({
      amount: amnt,
      from: convertTo.from,
    });
  };

  const toggleConvertForm = () => {
    setShowForm((prev) => !prev);
    setConvertTo({
      amount: 0,
      from: convertTo.amount,
    });
    // setting converto.amount is very redundant
  };

  const handleUpdateInputValue = () => {
    const HOLDER = addedCurr;

    for (const i of HOLDER) {
      if (i.sign === convertTo.from) {
        document.getElementById('inputID').value = i.amount;
        handleFormInputChange(i.amount);
      }
    }
  };

  const handleConversion = (currSign) => {
    const holder = addedCurr;

    for (const i of holder) {
      if (i.sign === convertTo.from) {
        if (i.amount < convertTo.amount) {
          alert(`insuficient funds in ${i.sign} Card`);
          return;
        }
        if (i.sign === currSign) {
          alert(
            `redundant conversion: will not convert from ${currSign} to ${currSign}`
          );
          return;
        }
        i.amount -= convertTo.amount;
      }
      if (i.sign === currSign) {
        const RESULTS =
          (convertTo.amount / fetchResults[convertTo.from]) *
          fetchResults[currSign];

        i.amount += RESULTS;
      }
    }

    // setAddedCurr([...holder]);
    // console.log('new addedCurr', addedCurr);
    toggleConvertForm();
  };

  return (
    <StyledContainer>
      {showForm && (
        <div className="convert-to-overlay">
          {/* this is the modal that pops up on convert */}
          <form
            className="wallet-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleConversion(
                e.target.children.fromXToY.children.currency_dropDown.value
              );
            }}
          >
            <img
              className="close-convert-form"
              src={delIcon}
              alt="delet_card_button"
              onClick={toggleConvertForm}
            />
            <button
              className="take-all-btn"
              type="button"
              onClick={handleUpdateInputValue}
            >
              Convert All
            </button>
            <input
              type="number"
              step="any"
              autoFocus
              id="inputID"
              placeholder="type in Amount To Convert"
              onChange={(e) => handleFormInputChange(+e.target.value)}
            />
            <div className="from-x-to-y" id="fromXToY">
              <p id="convertParagraph" value={convertTo.amount}>
                convert {convertTo.amount} {convertTo.from} to :
              </p>
              <select name="currencies" id="currency_dropDown">
                {addedCurr.map(({ sign, id }) => (
                  <option value={sign} key={id}>
                    {sign}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="wallet-confirm-btn">
              Confirm
            </button>
          </form>
        </div>
      )}

      {/* FORM ENDS HERE */}

      <div className="card-container">
        {addedCurr.map(({ sign, amount, id }, index) => {
          return (
            <div className="card" key={id}>
              {index > 2 ? (
                <img
                  className="delet-card"
                  src={delIcon}
                  alt="delet_card_button"
                  name={amount}
                  id={sign}
                  onClick={(e) => {
                    handleDelete(id, e.target.id, +e.target.name);
                  }}
                />
              ) : (
                ''
              )}
              <p className="sign">{sign} Balance</p>
              <div className="balance">
                <p>{amount}</p>
              </div>
              <button
                type="button"
                className="convert-to"
                name={sign}
                onClick={(e) => {
                  toggleConvertForm();
                  setConvertTo({
                    amount: convertTo.amount,
                    from: e.target.name,
                  });
                }}
              >
                Convert To
              </button>
            </div>
          );
        })}
      </div>
    </StyledContainer>
  );
}
