import styled from 'styled-components';

const Container = styled.div`
  /* background-color: brown;
  color: black; */
  margin: 0 auto;
  width: 90vw;
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
    justify-content: space-between;
    padding: 2rem 10px;
  }

  .card {
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
  }

  .card:hover {
    transform: translateY(-10px);
  }

  .card .sign {
    margin: 0;
    padding: 10px;
    border-bottom: 2px solid #fff;
  }

  .card .balance {
    padding-left: 10px;
    font-size: 3rem;
  }
`;

export default Container;
