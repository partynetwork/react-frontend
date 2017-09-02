import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Text } from 'rebass'
import styled from 'styled-components'
import SwitchLocale from 'containers/Home/SwitchLocale'
import Button from 'components/Button'

// language=SCSS prefix=&{ suffix=}
const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 10em;
    padding: 3em 0;
    position: relative;
    background-color: #233443;
    > p {
      color: white;
    }
`

class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          <SwitchLocale />
          <Text fontSize="2.3rem">React Frontend Web Starter</Text>
          <Text fontSize="1.3rem">Quick setup and high performance</Text>
          <Row mt={3}>
            <Button>
              Github
            </Button>
          </Row>
        </Header>
        <Container maxWidth="auto">
          <Link to="/about">About</Link>
        </Container>
      </div>
    )
  }
}

export default Home
