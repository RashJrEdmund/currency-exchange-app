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
  const { addedCurr, setAddedCurr } = React.useContext(MyContext);

  const [showForm, setShowForm] = React.useState(false);
  const [convertTo, setConvertTo] = React.useState({
    amount: 0,
    from: 'USD',
  });

  const handleDelete = (ID, delBtnId, deletedAmount = 0) => {
    console.log(ID, deletedAmount, 'was cleard');
    const holder = addedCurr;
    const newHolder = holder.filter(({ id }) => id !== ID);
    setAddedCurr([...newHolder]);

    if (deletedAmount > 0) {
      const Holder = addedCurr;

      Holder[0].amount += deletedAmount;
      console.log('this Holder', Holder);

      alert(`${delBtnId} card's amount added to default currency`);

      // setAddedCurr(...Holder);
    }
  };

  const handleFormInputChange = (amnt) => {
    setConvertTo({
      amount: amnt,
      from: convertTo.from,
    });
  };

  const toggleConvertForm = () => {
    setShowForm((prev) => !prev);
    setConvertTo({
      amount: 0,
      from: 'USD',
    });
  };

  const handleFormSubmit = (currSign) => {
    console.clear();
    console.log(
      'convert',
      convertTo.amount,
      'from',
      convertTo.from,
      'to',
      currSign
    );

    const holder = addedCurr;

    for (const i of holder) {
      if (i.sign === convertTo.from) {
        i.amount -= convertTo.amount;
      }
      if (i.sign === currSign) {
        i.amount += convertTo.amount;
      }
      if (addedCurr.indexOf(i) === addedCurr.length - 1) {
        console.log('loop done: this holder', holder);
      }
    }

    // setAddedCurr([...holder]);
    // console.log('new addedCurr', addedCurr);

    // setAddedCurr([
    //   { sign: 'USD', amount: addedCurr.amount, id: 0 },
    //   { sign: 'XFA', amount: addedCurr.amount, id: 1 },
    //   { sign: 'EUR', amount: addedCurr.amount, id: 2 },
    // ]);

    toggleConvertForm();
  };

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setCurrency([...currency, { sign: 'GBP', value: 70, rate: 1 }]);
  //   }, 3000);
  // }, []);

  return (
    <StyledContainer>
      {showForm && (
        <div className="convert-to-overlay">
          {/* this is the modal that pops up on convert */}
          <form
            className="wallet-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleFormSubmit(
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
            <input
              type="number"
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
                  console.log(e.target.name, 'was click');
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
