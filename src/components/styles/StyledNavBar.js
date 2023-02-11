import styled from 'styled-components';

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

    .ul {
      background-color: brown;
      position: relative;
      width: 100%;
      height: 100%;
      list-style: none;
      padding: 120px 0 0;
      margin: 0;
      transition: 0.5s;

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
        cursor: pointer;
      }

      li:nth-of-type(1),
      li:nth-of-type(4) {
        cursor: not-allowed;
      }

      .add-new-currency {
        background-color: gold;
        display: flex;

        select {
          margin: 0 1rem;
          min-width: 60px;
          font-size: 1.3rem;
        }
      }
    }

    .active-ul {
      padding-left: 200px;
    }
  }

  .active-ul-container {
    border-left: 1px solid grey;
    width: 50vw;
    max-width: 600px;
  }
`;

export default StyledNavBar;
