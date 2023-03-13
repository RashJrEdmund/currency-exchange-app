/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import StyledNavBar from './styles/StyledNavBar';
import MyContext from '../Context';
import closeMenu from '../images/close menu icon.png';
import menuIcon from '../images/menu-icon.svg';

export default function Navbar() {
  const {
    credentials,
    setCredentials,
    fetchKeys,
    fetchResults,
    addedCurr,
    setAddedCurr,
    toggleTopUpForm,
    openMenu,
    setOpenMenu,
  } = React.useContext(MyContext);
  const [icon, setIcon] = React.useState(menuIcon);

  const toggleNavAndBtn = () => {
    setOpenMenu((prev) => !prev);
    setIcon(openMenu ? menuIcon : closeMenu);
  };

  const handleChangeDefault = (e) => {
    const from = credentials.baseSign;
    const AMT = credentials.balance;

    const RESULTS = (AMT / fetchResults[from]) * fetchResults[e];

    setCredentials((prevCred) => {
      prevCred.baseSign = e;
      prevCred.balance = RESULTS;
      return prevCred;
    });
  };

  const handleAddCurrency = (newCurr) => {
    for (const i of addedCurr) {
      if (i.sign.includes(newCurr)) {
        alert(`A ${newCurr} card already exist`);
        return;
      }
    }

    setAddedCurr([
      ...addedCurr,
      {
        sign: newCurr,
        amount: 0,
        id: addedCurr[addedCurr.length - 1].id + 1,
      },
    ]);

    alert(`${newCurr} card added`);
  };

  return (
    <StyledNavBar>
      <div className="credentials">
        <p className="name">
          {credentials.name === 'userName'
            ? 'User:'
            : `
              ${credentials.name}'${
                credentials.name
                  .charAt(credentials.name.length - 1)
                  .toLowerCase() === 's'
                  ? ''
                  : 's'
              } Wallet
            `}
        </p>
        <p>
          DefaultTotal: {credentials.balance} {credentials.baseSign}
          {/* {credentials.balance > 700000 ? " c'mon bruh! 😹, Really?" : ''} */}
        </p>
      </div>
      <div
        className={
          openMenu ? 'active-ul-container ul-container' : 'ul-container'
        }
      >
        <ul className={openMenu ? 'ul' : 'ul active-ul'}>
          <img
            className={openMenu ? 'menu-btn active-menu-btn' : 'menu-btn'}
            src={icon}
            alt="menu_icon "
            onClick={() => {
              toggleNavAndBtn();
            }}
          />
          <li className="change-default">
            <label htmlFor="changeDef">Change Default currency :</label>
            <select
              name="currencies"
              onChange={(e) => handleChangeDefault(e.target.value)}
            >
              {addedCurr.map(({ sign, id }) => (
                <option value={sign} key={id}>
                  {sign}
                </option>
              ))}
            </select>
          </li>
          <li className="add-new-currency">
            <label htmlFor="add_new_currency">Add new currencyCard : </label>
            <select
              name="add-new-currency"
              id="add_new_currency"
              onChange={(e) => handleAddCurrency(e.target.value)}
            >
              {fetchKeys.map((curr) => (
                <option value={curr} key={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </li>
          <li
            onClick={() => {
              toggleTopUpForm();
              toggleNavAndBtn();
            }}
          >
            topUp
          </li>
          <li onClick={() => alert('this Feature is not yet avalaible')}>
            cashOUT
          </li>
        </ul>
      </div>
    </StyledNavBar>
  );
}
