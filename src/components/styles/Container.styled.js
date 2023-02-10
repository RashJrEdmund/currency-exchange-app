import styled from 'styled-components';

const StyledContainer = styled.div`
  /* background-color: brown; */
  color: black;
  margin: 0 auto;
  width: 60vw;
  max-width: 1200px;
  height: fit-content;
  font-size: 2rem;

  .convert-to-overlay {
    background: #cccccc80;
    /* position: fixed; */
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
      padding: 10px 10px 20px;
      border: none;
      border-radius: 10px;

      input {
        height: 30px;
        width: 300px;
        max-width: 90%;
        margin: 1rem 0;
        padding: 10px;
        font-size: 1.2rem;
      }

      .from-x-to-y {
        background-color: gold;
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
      }
    }
  }

  .card-container {
    /* background-color: navajowhite; */
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* justify-content: space-between; */
    padding: 2rem 10px;

    .card {
      position: relative;
      background-color: #000;
      color: #fff;
      width: fit-content;
      min-width: 300px;
      height: fit-content;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      margin: 15px;
      box-shadow: 0 0 10px #000;
      transition: 0.5s;

      &:hover {
        transform: scale(1.03);
      }

      .delet-card {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -30%);
        background-color: brown;
        color: white;
        height: 40px;
        width: 40px;
        border-radius: 50px;
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
        margin: 10px;
        cursor: pointer;
        transition: 0.5s;
      }

      .convert-to:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default StyledContainer;
