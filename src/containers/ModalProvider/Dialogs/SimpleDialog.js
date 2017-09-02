import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Hammer from 'react-hammerjs'
import Button from 'components/Button'

// language=SCSS prefix=&{ suffix=}
const ModalDialog = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 1em 2.6em;
    width: 28em;
    border-radius: .1em;
    box-shadow: rgba(0, 0, 0, 0.4) 0 6px 98px;
`
// language=SCSS prefix=&{ suffix=}
const ConfirmButton = styled(Button)`
    font-size: 2em;
    background-color: transparent;
    border: none;
`
// language=SCSS prefix=&{ suffix=}
const Controls = styled.div`
    text-align: right;
    margin-top: 2.5em;
`
/**
 * Look add global style in file styles/components/Modal.scss
 */
const SimpleDialog = (props) => {
  const MODAL_CONTENT_MESSAGE = {}
  const ContentMessageComponent = MODAL_CONTENT_MESSAGE[props.messageTitle]
  return (
    <ModalDialog>
      <div className="content">
        {ContentMessageComponent ? <ContentMessageComponent {...props} /> : (
          <h4>
            <FormattedMessage id={props.messageTitle} />
          </h4>
        )}
      </div>
      <Controls>
        <Hammer onTap={props.onClickConfirm}>
          <ConfirmButton type="button">
            <FormattedMessage id={props.messageBtnConfirm} />
          </ConfirmButton>
        </Hammer>
      </Controls>
    </ModalDialog>
  )
}

SimpleDialog.propTypes = {
  messageTitle: PropTypes.string,
  messageBtnConfirm: PropTypes.string,
  onClickConfirm: PropTypes.func,
}
SimpleDialog.defaultProps = {
  messageTitle: '',
  messageBtnConfirm: 'confirm_btn',
  messageBtnCancel: 'cancel_btn',
  onClickCancel: () => null,
  onClickConfirm: () => null,
}

export default SimpleDialog
