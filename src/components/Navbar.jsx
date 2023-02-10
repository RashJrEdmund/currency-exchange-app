/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import MyContext from '../Context';
import closeMenu from '../images/close menu icon.png';
import menuIcon from '../images/menu-icon.svg';

const StyledNavBar = styled.nav`
  background-color: brown;
  position: relative;
  color: black;
  width: 100%;
  height: fit-content;
  min-height: 130px;
  font-size: 2rem;
  padding: 5px 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  p {
    margin: 0;
  }

  .ul-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 90px;
    height: 100vh;
    padding: 0;
    margin: 0;
    z-index: 2;
    transition: 0.5s;
  }

  .active-ul-container {
    border-left: 1px solid grey;
    width: 50vw;
    max-width: 600px;
  }

  .ul {
    background-color: brown;
    position: relative;
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 120px 0 0;
    margin: 0;
    transition: 0.5s;
  }

  .active-ul {
    padding-left: 200px;
  }

  .menu-btn {
    position: absolute;
    left: 0;
    top: 0;
    height: 70px;
    width: 70px;
    margin: 10px;
    cursor: pointer;
    transition: 0.5s;
  }

  li {
    background-color: green;
    margin: 0;
    padding: 1rem 2rem;
  }
`;

export default function Navbar() {
  const { credentials } = React.useContext(MyContext);
  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(menuIcon);

  const toggleNavAndBtn = () => {
    setOpen((prev) => !prev);
    setIcon(open ? menuIcon : closeMenu);
  };

  return (
    <StyledNavBar>
      <div>
        <p className="name">
          {credentials.name === 'userName'
            ? 'User:'
            : `${credentials.name}'${
                credentials.name
                  .charAt(credentials.name.length - 1)
                  .toLowerCase() === 's'
                  ? ''
                  : 's'
              } Wallet`}
        </p>
        <p>
          DefaultTotal: {credentials.balance} {credentials.baseSign}
          {credentials.balance > 700000 ? "c'mon bruh! 😹, Really?" : ''}
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
          <li>Add New Card</li>
          <li>Delete All Extra Cards</li>
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
