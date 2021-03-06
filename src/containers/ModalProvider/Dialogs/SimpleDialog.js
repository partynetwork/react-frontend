import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Button from 'components/Button'

import messages from '../messages'

// language=SCSS prefix=&{ suffix=}
const ModalDialog = styled.div`
    background-color: white;
    padding: 1em 2.6em;
    width: 28em;
    border-radius: .1em;
    box-shadow: rgba(0, 0, 0, 0.4) 0 6px 98px;
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
            <FormattedMessage {...messages.messageTitle} />
          </h4>
        )}
      </div>
      <Controls>
        <Button type="button" onClick={props.onClickConfirm}>
          <FormattedMessage {...messages.messageBtnConfirm} />
        </Button>
      </Controls>
    </ModalDialog>
  )
}

SimpleDialog.propTypes = {
  messageTitle: PropTypes.string,
  messageBtnConfirm: PropTypes.string,
  messageBtnCancel: PropTypes.string,
  onClickConfirm: PropTypes.func,
  onClickCancel: PropTypes.func,
}
SimpleDialog.defaultProps = {
  messageTitle: '',
  messageBtnConfirm: 'confirm_btn',
  messageBtnCancel: 'cancel_btn',
  onClickCancel: () => null,
  onClickConfirm: () => null,
}

export default SimpleDialog
