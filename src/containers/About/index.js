import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Text } from 'rebass'

class About extends Component {
  render() {
    return (
      <Container>
        <Text>About Page</Text>
        <Link to="/">back to home</Link>
      </Container>
    )
  }
}

export default About
