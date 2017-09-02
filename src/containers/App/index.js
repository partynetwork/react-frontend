import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ModalRoot from 'containers/ModalProvider'

// language=SCSS prefix=dummy{ suffix=}
const AppContainer = styled.main`
    display: flex;
    min-height: 100%;
    padding: 0 16px;
    flex-direction: column;
`

const App = ({ children }) => (
  <AppContainer>
    <ModalRoot />
    {React.Children.toArray(children)}
  </AppContainer>
)
App.defaultProps = {
  children: null,
}
App.propTypes = {
  children: PropTypes.node,
}

export default App
