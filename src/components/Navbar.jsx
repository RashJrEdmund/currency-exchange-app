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

  ul {
    background-color: brown;
    border-left: 1px solid grey;
    position: absolute;
    top: 0;
    right: 0;
    width: fit-content;
    height: 100vh;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    background-color: green;
    margin: 0;
    padding: 1rem 2rem;
  }
`;

export default function Navbar() {
  const { credentials, defaultBalance } = React.useContext(MyContext);
  return (
    <StyledNavBar>
      <div>
        <p className="name">{credentials.name}&lsquo;s wallet</p>
        <p>DefaultTotal: 2,000 {defaultBalance}</p>
      </div>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </StyledNavBar>
  );
}
