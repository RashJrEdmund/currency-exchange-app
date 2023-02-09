/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import StyledContainer from '../components/styles/Container.styled';
import delIcon from '../images/close menu icon.png';
import MyContext from '../Context';

export default function Wallet() {
  const { currency, setCurrency } = React.useContext(MyContext);

  const handleDelete = (valuePopped, name, position) => {
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
                    console.clear();
                    handleDelete(value, sign, id);
                  }}
                />
              ) : (
                ''
              )}
              <p className="sign">{sign} Balance</p>
              <div className="balance">
                <p>{value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </StyledContainer>
  );
}
