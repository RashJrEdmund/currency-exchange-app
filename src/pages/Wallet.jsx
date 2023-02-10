/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import StyledContainer from '../components/styles/Container.styled';
import delIcon from '../images/close menu icon.png';
import MyContext from '../Context';

export default function Wallet() {
  const { currency, setCurrency, addedCurrencies } =
    React.useContext(MyContext);

  const [showForm, setShowForm] = React.useState(false);
  const [convertTo, setConvertTo] = React.useState({
    amount: 0,
    from: 'USD',
  });

  const handleDelete = (position) => {
    const holder = currency;
    const newHolder = holder.filter(({ id }) => id !== position);
    setCurrency([...newHolder]);
  };

  const handleFormInputChange = (amnt) => {
    setConvertTo({
      amount: amnt,
      from: 'USD',
    });
  };

  const toggleConvertForm = () => {
    setShowForm((prev) => !prev);
  };

  const handleFormSubmit = (currSign) => {
    console.log('this is currSign and', currSign, convertTo.amount);
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
              onClick={() => {
                // console.clear();
                toggleConvertForm();
              }}
            />
            <input
              type="number"
              id="inputID"
              placeholder="type in Amount To Convert"
              onChange={(e) => handleFormInputChange(e.target.value)}
              // value={20}
            />
            <div className="from-x-to-y" id="fromXToY">
              <p id="convertParagraph" value={convertTo.amount}>
                convert {convertTo.amount} {convertTo.from} to :
              </p>
              <select name="currencies" id="currency_dropDown">
                {addedCurrencies.map((KEY, ind) => (
                  <option value={KEY} key={ind}>
                    {KEY}
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
        {currency.map(({ sign, value, id }, index) => {
          return (
            <div className="card" key={id}>
              {index > 2 ? (
                <img
                  className="delet-card"
                  src={delIcon}
                  alt="delet_card_button"
                  onClick={() => {
                    // console.clear();
                    handleDelete(id);
                  }}
                />
              ) : (
                ''
              )}
              <p className="sign">{sign} Balance</p>
              <div className="balance">
                <p>{value}</p>
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
