import styled from 'styled-components';

export const SHeader = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  box-shadow: 0px 4px 2px -2px #979797;
  background: white;
  z-index: 9;

  div {
    padding: 0 20px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    &:nth-child(2) {
      justify-content: flex-end;
    }
  }
`;

export const SLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SRightHeader = styled.div`
  align-items: center;

  select {
    margin-left: 20px;
  }
`;