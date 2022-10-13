import styled from 'styled-components';
import { theme } from '../../../services/theme';

export const SLayout = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  background: ${theme.lightGrey};
  overflow: hidden;
`;
