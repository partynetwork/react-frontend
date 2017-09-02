import PropTypes from 'prop-types'
import styled from 'styled-components'
import has from 'lodash/has'
import { Button as RebassButton } from 'rebass'

const getButtonColor = (props) => {
  if (has(props, `theme.colors.${props.color}`)) {
    return props.theme.colors[props.color] || props.color
  }
  return props.theme.colors.defaultButtonBgColor
}
const getButtonBorderColor = (props) => {
  if (has(props, `theme.colors.${props.color}`)) {
    return props.theme.colors[props.color] || props.color
  }
  return props.theme.colors.defaultButtonBgColor
}
// language=SCSS prefix=&{ suffix=}
const Button = styled(RebassButton)`
    background-color: ${ props => getButtonColor(props) };
    border: 1px solid ${ props => getButtonBorderColor(props) };
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    
    &:focus,&:active {
      background-color: ${ props => getButtonColor(props) };
      border: 1px solid ${ props => getButtonBorderColor(props) };
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
