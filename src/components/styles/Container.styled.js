import styled from 'styled-components';

const StyledContainer = styled.div`
  color: black;
  margin: 0 auto;
  width: 60vw;
  max-width: 1200px;
  height: fit-content;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .convert-to-overlay {
    background: #cccccc80;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 4;

    .wallet-form {
      position: relative;
      background-color: #000000a2;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90vw;
      max-width: 500px;
      height: fit-content;
      padding: 1rem;
      border: none;
      border-radius: 10px;

      .close-convert-form {
        background-color: brown;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);
        height: 40px;
        width: 40px;
        border-radius: 50px;
        cursor: pointer;
      }

      input {
        height: 30px;
        width: 300px;
        max-width: 90%;
        margin: 1rem auto;
        padding: 10px;
        font-size: 1.2rem;
      }

      .from-x-to-y {
        margin: 0;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;

        p {
          margin: 0;
          font-size: 1.4rem;
          width: fit-content;
          height: fit-content;
        }

        select {
          margin: 0 0 0 10px;
          height: 30px;
          min-width: 60px;
          font-size: 1.1rem;
        }
      }

      .wallet-confirm-btn {
        background-color: brown;
        color: #fff;
        font-weight: 700;
        right: 0;
        bottom: 0;
        margin: 1.2rem;
        height: fit-content;
        width: fit-content;
        padding: 10px;
        border: none;
        cursor: pointer;
      }
    }
  }

  .card-container {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 2rem 10px;

    .card {
      position: relative;
      background-color: #000;
      color: #fff;
      width: 300px;
      height: fit-content;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      margin: 15px;
      box-shadow: 0 0 10px #000;
      transition: 0.5s;
      word-wrap: break-word;
      word-break: break-all;

      &:hover {
        transform: scale(1.03);
      }

      .delet-card {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -30%);
        background-color: brown;
        height: 40px;
        width: 40px;
        border-radius: 50px;
        cursor: pointer;
      }

      .sign {
        margin: 0;
        padding: 10px;
        border-bottom: 2px solid #fff;
      }

      .balance {
        padding-left: 10px;
        font-size: 3rem;
      }

      .convert-to {
        border: none;
        width: fit-content;
        height: fit-content;
        padding: 5px;
        border-radius: 5px;
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 1rem 10px;
        cursor: pointer;
        opacity: 0;
        transition: 0.5s;
      }

      .convert-to:hover {
        transform: scale(1.05);
      }

      &:hover .convert-to {
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .card-container {
      .card {
        &:hover {
          transform: scale(1);
        }

        .convert-to {
          opacity: 1;
        }
      }
    }
  }
`;

export default StyledContainer;
