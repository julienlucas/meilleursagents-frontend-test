import styled from 'styled-components';
import { theme } from '../../../services/theme';

export const SLayout = styled.div`
  position: relative;
  margin: 0 auto;
  display: table;
  max-width: 1200px;
  width: 100%;
  max-height: 1120px;
  height: 100%;
  background: ${theme.lightGrey};
`;
