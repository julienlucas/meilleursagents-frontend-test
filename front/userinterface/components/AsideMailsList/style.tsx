import styled from 'styled-components';
import { theme } from '../../../services/theme';
import iconMailOpen from '../../../../assets/icon-mail-open.svg';

export const SAsideMailsList = styled.aside`
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 100%;
  background: white;
  border-right: 2px solid ${theme.lightGrey100};
  z-index: 1;
`;

export const SMail = styled.aside`
  max-height: 100px;
  height: 100%;
  padding: 20px 20px 20px 40px;
  border-bottom: 2px solid ${theme.lightGrey100};
  background-image: url(${iconMailOpen});
  background-position: 10px 20px;
  background-repeat: no-repeat;

  * {
    margin: 0;
    padding: 0;
  }

  .date {
    position: relative;
    bottom: -3px;
    float: right
  }

  h3 {
    display: inline-block
  }
`
