import styled from 'styled-components';
import { theme } from '../../../services/theme';
const iconMailOpen = new URL('../../../../assets/icon-mail-open.svg', import.meta.url).href;
const iconPhone = new URL('../../../../assets/icon-phone.svg', import.meta.url).href;

export const SMailList = styled.aside`
  position: relative;
  float: left;
  width: 100%;
  max-width: 375px;
  height: calc(100% - 60px);
  background: white;
  border-right: 2px solid ${theme.lightGrey100};
  overflow-Y: scroll;
  z-index: 1;
`;

export const SSms = styled.div`
  position: relative;
  max-height: 70px;
  height: 100%;
  padding: 20px 20px 20px 40px;
  border-bottom: 2px solid ${theme.lightGrey100};
  background-image: url(${iconPhone});
  background-position: 10px 20px;
  background-repeat: no-repeat;
  cursor: pointer;
  color: ${props => props.readStatus ? theme.darkGrey : "black"};

  &:hover {
    background-color: ${theme.lightGrey100};
  }

  * {
    margin: 0;
    padding: 0;
  }

  .date {
    position: relative;
    bottom: -3px;
    float: right;
    color: ${props => props.readStatus ? theme.darkGrey : theme.purple};
  }

  h3 {
    display: inline-block
  }
`;

export const SMail = styled.div`
  position: relative;
  max-height: 70px;
  height: 100%;
  padding: 20px 20px 20px 40px;
  border-bottom: 2px solid ${theme.lightGrey100};
  background-image: url(${iconMailOpen});
  background-position: 10px 20px;
  background-repeat: no-repeat;
  cursor: pointer;
  color: ${props => props.readStatus ? theme.darkGrey : "black"};

  &:hover {
    background-color: ${theme.lightGrey100};
  }

  * {
    margin: 0;
    padding: 0;
  }

  .date {
    position: relative;
    bottom: -3px;
    float: right;
    color: ${props => props.readStatus ? theme.darkGrey : theme.purple};
  }

  h3 {
    display: inline-block
  }
`
