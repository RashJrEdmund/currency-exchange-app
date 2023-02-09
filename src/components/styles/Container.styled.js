import styled from 'styled-components';

const StyledContainer = styled.div`
  /* background-color: brown; */
  color: black;
  margin: 0 auto;
  width: 60vw;
  max-width: 1200px;
  height: fit-content;
  font-size: 2rem;

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
      cursor: pointer;
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
    }
  }
`;

export default StyledContainer;
