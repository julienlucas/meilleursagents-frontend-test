import styled from 'styled-components';
import { theme } from '../../../services/theme';
const iconMailOpen = new URL('../../../../assets/icon-mail-open.svg', import.meta.url)
  .href;
const iconMail = new URL('../../../../assets/icon-mail.svg', import.meta.url).href;
const iconPhone = new URL('../../../../assets/icon-phone.svg', import.meta.url).href;

export const SMailList = styled.aside`
  position: relative;
  float: left;
  width: 100%;
  max-width: 375px;
  height: calc(100% - 60px);
  background: white;
  border-right: 2px solid ${theme.lightGrey100};
  overflow-y: scroll;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 275px;
  }
  @media (max-width: 580px) {
    max-width: 100%;
  }
`;

export const SSms = styled.div`
  position: relative;
  max-height: 70px;
  height: 100%;
  padding: 20px 20px 20px 40px;
  border-bottom: 2px solid ${theme.lightGrey100};
  cursor: pointer;
  color: ${(props) => (props.readStatus ? theme.darkGrey : 'black')};

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${iconPhone});
    background-position: 10px 22px;
    background-repeat: no-repeat;
    content: '';

    ${({ readStatus }) =>
      readStatus &&
      `
        filter: grayscale(100%) brightness(500%);
      `}
  }

  &:hover {
    background-color: ${theme.lightGrey};
  }

  * {
    margin: 0;
    padding: 0;
  }

  .body {
    color: ${theme.darkGrey};
  }

  .date {
    position: relative;
    bottom: -3px;
    float: right;
    color: ${(props) => (props.readStatus ? theme.darkGrey : theme.purple)};
  }

  h3 {
    display: inline-block;
  }
`;

export const SMail = styled.div`
  position: relative;
  max-height: 70px;
  height: 100%;
  padding: 20px 20px 20px 40px;
  border-bottom: 2px solid ${theme.lightGrey100};
  cursor: pointer;
  color: ${(props) => (props.readStatus ? theme.darkGrey : 'black')};

  ${({ readStatus }) =>
    readStatus
      ? `
      background: url(${iconMailOpen}) no-repeat;
      background-position: 10px 20px;
    `
      : `
      background: url(${iconMail}) no-repeat;
      background-position: 10px 23px;
    `}

  &:hover {
    background-color: ${theme.lightGrey};
  }

  * {
    margin: 0;
    padding: 0;
  }

  .body {
    color: ${theme.darkGrey};
  }

  .date {
    position: relative;
    bottom: -3px;
    float: right;
    color: ${(props) => (props.readStatus ? theme.darkGrey : theme.purple)};
  }

  h3 {
    display: inline-block;
  }
`;
