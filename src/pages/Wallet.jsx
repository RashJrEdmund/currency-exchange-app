/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import StyledContainer from '../components/styles/Container.styled';
import delIcon from '../images/close menu icon.png';
import MyContext from '../Context';

export default function Wallet() {
  const { currency, setCurrency } = React.useContext(MyContext);

  const handleDelete = (position) => {
    const holder = currency;
    const newHolder = holder.filter(({ id }) => id !== position);
    // console.log('this is holder and val', holder, val);
    setCurrency([...newHolder]);
  };

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setCurrency([...currency, { sign: 'GBP', value: 70, rate: 1 }]);
  //   }, 3000);
  // }, []);

  return (
    <StyledContainer>
      <div className="convert-to-overlay">
        <form className="wallet-form">
          <input
            type="number"
            placeholder="type in Amount To Convert"
            // value={20}
          />
          <div className="from-x-to-y">
            <p>convet amount from USD to : </p>
            <select name="currencies" id="currency-dropDown">
              <option value="USD">USD</option>
              <option value="XAF">XAF</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </form>
      </div>
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
                onClick={(e) => console.log(e.target.name, 'was click')}
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
