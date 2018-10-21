import { injectGlobal } from 'react-emotion'

// This is the default CSS included in create-react-app.
export default injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
    overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #175377;
    background: #e9f2f5;
    line-height: 1.625;
    overflow-x: hidden;
    font-size: 1.6rem;

    @media (min-width: 550px) and (max-width: 799px) {
      font-size: 1.7rem;
    }
    @media (min-width: 800px) {
      font-size: 1.8rem;
    }
  }
  a, a:link, a:visited, a:focus, a:hover, a:active {
    color: #4078c0;
    text-decoration: none;
  }
  p {
    margin: 0;
  }
 `
