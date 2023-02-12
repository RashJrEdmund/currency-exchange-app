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

  .credentials {
    margin: 0;

    p {
      margin: 0;
    }
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
      border: 1px solid #cccccc80;
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
        margin: 20px 10px 0;
        cursor: pointer;
        transition: 0.5s;
      }

      li {
        border-bottom: 1px solid #cccccc80;
        height: fit-content;
        margin: 0;
        padding: 1rem 2rem;

        &,
        label {
          cursor: pointer;
        }

        &:nth-of-type(1) {
          border-top: 1px solid #cccccc80;
        }
      }

      li:nth-of-type(1),
      li:nth-of-type(4) {
        cursor: not-allowed;
      }

      .change-default,
      .add-new-currency {
        display: flex;
        align-items: center;

        select {
          background-color: #ccc;
          margin: 0 1rem;
          min-width: 70px;
          max-height: 50px;
          font-size: 1.3rem;
          cursor: pointer;
        }
      }
    }

    .active-ul {
      padding-left: 200px;
    }
  }

  .active-ul-container {
    width: 50vw;
    max-width: 600px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding: 5px 1rem;

    .credentials {
      max-width: 270px;
    }

    .ul-container {
      width: 0;

      .ul {
        .menu-btn {
          height: 50px;
          width: 50px;
          margin: 20px 15px 0 0;
          transform: translateX(-120%);
        }

        .active-menu-btn {
          transform: translate(0);
        }

        li {
          font-size: 1.2rem;
          padding: 1rem 12px;
        }

        .change-default,
        .add-new-currency {
          select {
            background-color: #ccc;
            margin: 0 0 0 10px;
            cursor: pointer;
          }
        }
      }

      .active-ul {
        padding-left: 200px;
      }
    }

    .active-ul-container {
      width: 70vw;
    }
  }
`;

export default StyledNavBar;
