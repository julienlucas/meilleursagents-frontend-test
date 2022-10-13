import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

export default createGlobalStyle`
  body {
    position: relative;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f2f2f2;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a {
    color: ${theme.purple};
    text-decoration: none;
  }

  p {
    font-size: 14px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }

  h2 {
    position: relative;
    margin-bottom: -10px;
    font-size: 20px;
    font-weight: 700;
  }

  h3 {
    font-size: 18px;
  }
`;
