import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import NavLink from './NavLink'
import messages from './messages'
// language=SCSS prefix=&{ suffix=}
const Wrapper = styled.div`
    background-color: #14001e;
`
const NavBar = () => (
  <Wrapper>
    <NavLink to="/">
      <FormattedMessage {...messages.homeLink} />
    </NavLink>
    <NavLink to="/about">
      <FormattedMessage {...messages.aboutLink} />
    </NavLink>
  </Wrapper>
)

export default NavBar
