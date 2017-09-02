import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppContainer from 'containers/App'
import AboutContainer from 'containers/About'
import HomeContainer from 'containers/Home'

export default () => (
  <Router>
    <AppContainer>
      <Route exact path="/about" component={AboutContainer} />
      <Route exact path="/" component={HomeContainer} />
    </AppContainer>
  </Router>
)
