/* eslint-disable no-unused-vars */
import React from 'react';

import Container from '../components/styles/Container.styled';
import MyContext from '../Context';

export default function Wallet() {
  const {
    credentials,
    setCredentials,

    currency,
    setCurrency,

    defaultBalance,
    setDefaultBalance,
  } = React.useContext(MyContext);
  /* React.useEffect(() => {
    setTimeout(() => {
      setCredentials('the useEffect has been ran');
    }, 3000);
  }); */
  return (
    <Container>
      <div className="card-container">
        {currency.map((item, index) => {
          return (
            <div className="card">
              <p className="sign">{item.sign} Balance</p>
              <div className="balance">
                <p>1254</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
