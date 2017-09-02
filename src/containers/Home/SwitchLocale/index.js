import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Tappable from 'react-tappable/lib/Tappable'
// language=SCSS prefix=&{ suffix=}
const Wrapper = styled.ul`
    padding: 0;
    margin: 0;
    > li {
      list-style: none;
      display: inline;
      color: white;
    }
`

const SwitchLocale = (props) => {
  const handleChangeLocale = newLocale => props.onChange(newLocale)
  return (
    <Wrapper>
      <li>
        <Tappable onTap={() => handleChangeLocale('en')}>
          EN
        </Tappable>
      </li>
      <li>
        <Tappable onTap={() => handleChangeLocale('th')}>
          TH
        </Tappable>
      </li>
    </Wrapper>
  )
}

SwitchLocale.propTypes = {
  onChange: PropTypes.func,
}
SwitchLocale.defaultProps = {
  currentLocale: null,
  onChange: () => {
  },
}

export default SwitchLocale
