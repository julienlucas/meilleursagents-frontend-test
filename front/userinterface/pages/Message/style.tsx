import styled from 'styled-components';
import { theme } from '../../../services/theme';
const iconMailOpen = '../../../../assets/icon-mail-open.svg';

export const SMessage = styled.main`
  position: relative;
  display: flex;
  float: right;
  width: 100%;
  height: 100%;
  max-width: calc(100% - 377px);

  @media (max-width: 768px) {
    max-width: calc(100% - 277px);
  }
  @media (max-width: 580px) {
    position: absolute;
    top: 60px;
    max-width: 100%;
    background: white;
    z-index: 2;
  }
`;

export const SMailContainer = styled.div`
  margin: 25px 25px 0;

  @media (max-width: 580px) {
    margin: 0;
  }
`;

export const SMessageHeader = styled.section`
  padding: 25px 20px 10px 70px;
  background: white;
  width: 100%;

  h3 {
    position: relative;
    left: -45px;
    padding-left: 40px;
    background: url(${iconMailOpen}) no-repeat;
  }

  ul {
    padding: 0;
    margin: 15px 0 0 0;
    list-style: none;

    li {
      margin-bottom: 10px;

      span {
        height: 15px;
        display: inline-flex;
        align-items: center;
      }
      p {
        width: 100px;
        font-size: 16px;
      }
      a {
        margin-left: 95px;
      }
    }
  }


  @media (max-width: 990px) {
    ul {
      li {
        p {
          width: 80px;
        }
        a {
          margin-left: auto;
        }
      }
    }
`;

export const SMessageBody = styled.div`
  position: relative;
  margin: 25px 0;
  padding: 40px 30px;
  background: white;
  height: calc(100% - 320px);
  width: 100%;

  .date {
    margin-bottom: 50px;
    font-size: 18px;
    color: ${theme.darkGrey};
  }
`;

export const SCloseButton = styled.button`
  position: absolute;
  margin-top: -5px;
  right: 20px;
  border: none;
  font-size: 20px;
  background: white;
  cursor: pointer;
`;
