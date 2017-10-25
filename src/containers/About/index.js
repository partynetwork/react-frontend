import React, { Component } from 'react'
import { Container, Text } from 'rebass'
import { Link } from 'react-router-dom'

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
