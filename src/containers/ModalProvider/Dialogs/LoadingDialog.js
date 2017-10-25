import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import getThemeColor from 'utils/getThemeColor'
// language=SCSS prefix=dummy{ suffix=}
const CssLoad = styled.div`
    width: 150px;
    height: 100px;
    text-align: center;
    display: flex;
    border-radius: 15px;
    justify-content: center;
    background: rgba(255, 255, 255, 1);
    align-items: center;

`
// language=SCSS prefix=dummy{ suffix=}
const spinWheelKeyFrames = keyframes`
    100% {
      transform: rotate(360deg);
    }
`
// language=SCSS prefix=dummy{ suffix=}
const CssSpeeding = styled.div`
    width: 49px;
    height: 49px;
    margin: 0 auto;
    border: 3px solid ${ props => getThemeColor(props, props.color)};
    border-radius: 50%;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: ${spinWheelKeyFrames} 575ms infinite linear;
`

const LoadingDialog = ({ color }) => (
  <CssLoad>
    <CssSpeeding color={color} />
  </CssLoad>
)

LoadingDialog.propTypes = {
  color: PropTypes.string,
}
LoadingDialog.defaultProps = {
  color: '#ff0000',
}

export default LoadingDialog
