// import { createGlobalStyle, css } from 'styled-components';
import * as styled from 'styled-components'; //workaround to get prettier format working within createGlobalStylye

const globalStyles = styled.createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    transition: all 500ms ease;
    font-size: 1.2rem;
    font-family: Roboto;
    transition: all 0.25s linear;
  }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* Remove anchor default styling */
  a {
    color: inherit;
    text-decoration: inherit;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

//  body {
//   background: ${(p) => p.theme.main};
//   color: ${(p) => p.theme.palette.text.primary};
//   text-rendering: optimizeLegibility;
//   };

export default globalStyles;
