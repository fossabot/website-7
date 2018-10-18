import { injectGlobal } from 'react-emotion'

// This is the default CSS included in create-react-app.
export default injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #175377;
    background: #e9f2f5;
    font-size: 1.6rem;
    overflow-x: hidden;
  }
 `
