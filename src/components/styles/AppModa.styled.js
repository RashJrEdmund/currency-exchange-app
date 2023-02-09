import styled from 'styled-components';

const StyledAppModal = styled.div`
  display: none;
  background: #ccce;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;

  .container {
    background-color: black;
  }
`;

export default StyledAppModal;
