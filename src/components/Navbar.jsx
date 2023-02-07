/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import MyContext from '../Context';

const StyledNavBar = styled.nav`
  background-color: brown;
  position: relative;
  color: black;
  width: 100%;
  height: fit-content;
  font-size: 2rem;
  padding: 5px 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
  }

  .ul-container {
    background-color: grey;
    border-left: 1px solid grey;
    position: absolute;
    top: 0;
    right: 0;
    width: 70vw;
    max-width: 700px;
    width: 500px;
    height: 100vh;
    padding: 0;
    margin: 0;
    z-index: 2;
    transition: 0.5s;
  }

  .varying-ul {
    background-color: brown;
    position: relative;
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 100px 0 0;
    margin: 0;
  }

  .active-ul {
    /* right: -100%;
    transform: translateX(-50%); */
    width: 80px;
    padding-left: 100px;
  }

  .menu-icons {
    background-color: pink;
    position: absolute;
    left: 0;
    top: 0;
    height: 170px;
  }

  .open-menu {
    background-color: purple;
    left: 0;
    top: 70px;
  }

  .close-menu {
    background-color: purple;
    left: 0;
    top: 0;
  }

  li {
    background-color: green;
    margin: 0;
    padding: 1rem 2rem;
  }
`;

export default function Navbar() {
  const { credentials, defaultBalance } = React.useContext(MyContext);
  const [open, setOpen] = React.useState(false);

  const toggleNav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <StyledNavBar>
      <div>
        <p className="name">{credentials.name}&lsquo;s wallet</p>
        <p>DefaultTotal: 2,000 {defaultBalance}</p>
      </div>
      <div className={open ? 'ul-container' : 'ul-container'}>
        <ul className={open ? 'varying-ul active-ul' : 'varying-ul'}>
          <div className="menu-icons">
            <div className="open-menu" onClick={toggleNav}>
              Open menu
            </div>
            <div className="close-menu" onClick={toggleNav}>
              Close menu
            </div>
          </div>
          <li>Change Default currency</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
    </StyledNavBar>
  );
}
