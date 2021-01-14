import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px 'Poppins', sans-serif;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;

    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
  }

  input, select {
    outline: none;

    font-size: 16px;
    font-weight: 500;
    font-family: Poppins, sans-serif;
  }
`
