import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #fff;
    --secondary-color: #fff;
    --background-color: #000;
    --text-color: #eee;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%
  }

  html, body, #__next {
    height: 100%;
    background: var(--background-color);
    color: var(--text-color);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p, a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--primary-color);
  }

  h1 {
    font-size: 4rem;
    line-height: var(--large);
  }
`
export default GlobalStyles
