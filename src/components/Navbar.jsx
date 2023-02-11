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
  const { credentials, fetchKeys, addedCurr, setAddedCurr, toggleTopUpForm } =
    React.useContext(MyContext);
  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(menuIcon);

  const toggleNavAndBtn = () => {
    setOpen((prev) => !prev);
    setIcon(open ? menuIcon : closeMenu);
  };

  const handleAddCurrency = (newCurr) => {
    console.clear();

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
      <div>
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
          {credentials.balance > 700000 ? " c'mon bruh! 😹, Really?" : ''}
        </p>
      </div>
      <div
        className={open ? 'active-ul-container ul-container' : 'ul-container'}
      >
        <ul className={open ? 'ul' : 'ul active-ul'}>
          <img
            className="menu-btn"
            src={icon}
            alt="menu_icon "
            onClick={() => {
              toggleNavAndBtn();
            }}
          />
          <li>Change Default currency</li>
          <li className="add-new-currency">
            <p>Add new currencyCard</p>
            <select
              name="add-new-currency"
              id="add-new-currency"
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
            toUp
          </li>
          <li>cashOUT</li>
        </ul>
      </div>

      {/* {credentials.name === 'userName' && (
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
              ADD+
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
      )} */}
    </StyledNavBar>
  );
}
