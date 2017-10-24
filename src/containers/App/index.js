import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DefaultTheme as ThemeProvider } from 'containers/ThemeProvider'
import ModalRoot from 'containers/ModalProvider'
import Navbar from 'components/Navbar'

// language=SCSS prefix=dummy{ suffix=}
const AppWrapper = styled.main`
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const App = ({children}) => (
  <AppWrapper>
    <Helmet
      titleTemplate="BCR777 - %s"
      defaultTitle="BCR777 - Default Title"
    >
      <meta name="description" content="Your side description" />
    </Helmet>
    <ThemeProvider>
      <ModalRoot />
      <Navbar />
      {React.Children.toArray(children)}
    </ThemeProvider>
  </AppWrapper>
)
App.defaultProps = {
  children: null,
}
App.propTypes = {
  children: PropTypes.node,
}

export default App
