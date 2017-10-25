import PropTypes from 'prop-types'
import styled from 'styled-components'
// import has from 'lodash/has'
import { Button as RebassButton } from 'rebass'

// language=SCSS prefix=&{ suffix=}
const Button = styled(RebassButton)`
    background-color: #f0f0f0;
    border: 1px solid #e0e0e0;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    
    &:focus,&:active {
      outline: none;
      box-shadow: none;
    }
`
Button.defaultProps = {
  color: 'default',
}
Button.propTypes = {
  color: PropTypes.string,
}
export default Button
