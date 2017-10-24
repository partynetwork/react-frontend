import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
// language=SCSS prefix=&{ suffix=}
const Wrapper = styled.div`
    background-color: #14001e;
`
const NavBar = () => (
  <Wrapper>
    <NavLink to="/">
      Home
    </NavLink>
    <NavLink to="/about">
      About
    </NavLink>
  </Wrapper>
)

export default NavBar
