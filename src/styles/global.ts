import { createGlobalStyle } from 'styled-components';
import theme from './themes/default';

// import 'rc-tabs/assets/index.css';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'react-multi-carousel/lib/styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-sweet-progress/lib/style.css';

export default createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

/**
  * 16px 1em
  * 24px 1.5em
  * 36px 2.25em
  * 56px 3.5em
 */
  body {
    color: ${theme.color.fontColor};
    background: ${theme.color.backgroundBody};

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-rendering: optimizeLegibility !important;
    --webkit-font-smoothing: antialiased !important;


  .MuiPickersBasePicker-container{
      background: ${theme.color.background};
      color: ${theme.color.fontColorSecondary};
    }

    .MuiPickersMonth-monthSelected{
      color: ${theme.color.primary};
    }

    .MuiTypography-colorPrimary{
      color: ${theme.color.primary};
    }

    .MuiInputBase-root {
      color: ${theme.color.fontColorSecondary};
      height: 50px;
      border-radius: 5px;
      background: ${theme.color.background};
    }
    .MuiFormLabel-root {
      color: ${theme.color.fontColorSecondary}
    }
    .MuiFormLabel-root.Mui-focused {
      color: ${theme.color.primary}
    }
    .MuiFilledInput-underline:after{
      border-bottom: 1px solid ${theme.color.primary};
    }
    .MuiPickersToolbar-toolbar{
      background-color: ${theme.color.primary};
    }
    .react-sweet-progress-symbol{
      color: ${theme.color.primary}
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 3.5em;
  }

  h2 {
    font-size: 2.25em;
  }

  h3 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a,
  button {
    color: ${theme.color.fontColorSecondary};
    font-size: 1em;
    cursor: pointer;
    outline: none !important;

    &::-moz-focus-inner {
      border: 0;
    }
  }

`;
