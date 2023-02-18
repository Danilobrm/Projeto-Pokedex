import styled from 'styled-components';

export const Container = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;

  & div {
    & img:nth-child(1) {
      opacity: 0.2;
      position: fixed;
      right: 0;
      top: -50px;
      z-index: 0;
      width: 700px;
    }
    & .pokemon {
      display: flex;
      margin: 70px auto;
      width: 500px;
      z-index: 1;
      position: relative;
    }
    @media (max-width: 768px) {
      height: 100%;
      & img:nth-child(1) {
        width: 400px;
        height: 400px;
        right: -50px;
        top: -50px;
      }
      & .pokemon {
        width: 300px;
        height: 300px;
        top: 0;
      }
    }
  }
`;
