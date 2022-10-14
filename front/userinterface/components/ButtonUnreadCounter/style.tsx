import styled from 'styled-components';
import { theme } from '../../../services/theme';
const iconMailOpen = '../../../../assets/icon-mail-open.svg';

export const SButtonUnreadCounter = styled.button`
  position: relative;
  display: flex;
  width: auto;
  min-width: 60px;
  height: 31px;
  color: white;
  background: ${(props) => (props.count === 0 ? theme.darkGrey : theme.purple)};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 0;
  font-size: 16px;
  transition: 0.1s;

  span {
    background-image: url(${iconMailOpen});
    background-position: 10px 20px;
    background-repeat: no-repeat;
  }

  img {
    position: relative;
    top: 1px;
    filter: invert(500%);
    margin-right: 5px;
  }
`;
