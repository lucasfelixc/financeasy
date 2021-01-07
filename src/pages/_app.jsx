import PropTypes from 'prop-types'

import theme from '../styles/theme'

import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
}

export default MyApp
