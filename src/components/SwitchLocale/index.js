import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from 'components/Button'

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
        <Button
          onClick={() => handleChangeLocale('en')}
          color={props.currentLocale === 'en' ? 'primary' : '#000000'}
        >
          EN
        </Button>
      </li>
      <li>
        <Button
          onClick={() => handleChangeLocale('th')}
        >
          TH
        </Button>
      </li>
    </Wrapper>
  )
}

SwitchLocale.propTypes = {
  onChange: PropTypes.func,
  currentLocale: PropTypes.string,
}
SwitchLocale.defaultProps = {
  currentLocale: null,
  onChange: () => {
  },
}

export default SwitchLocale
