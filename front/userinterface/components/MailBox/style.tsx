import styled from 'styled-components';
import { theme } from '../../../services/theme';

export const SMailBox = styled.div`
  position: relative;
  width: auto;
  height: 31px;
  color: white;
  background: ${theme.purple};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 4px;
`;
