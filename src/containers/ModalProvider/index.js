/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import SimpleDialog from './Dialogs/SimpleDialog'

const MODAL_COMPONENT = {
  SimpleDialog,
}

const customStyles = {
  overlay: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(35,35,35,.6)',
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'relative',
    textAlign: 'center',
    border: 'none',
    background: 'transparent',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
  },
}

class ModalRoot extends Component {
  render() {
    const { component, contentProps, isOpen } = this.props
    // if (!component) {
    //   return <div />
    // }
    const ModalType = MODAL_COMPONENT.SimpleDialog
    return (
      <Modal
        isOpen={isOpen}
        contentLabel="Dialog"
        closeTimeoutMS={100}
        style={customStyles}
      >
        LOOO
      </Modal>
    )
  }
}

ModalRoot.defaultProps = {
  contentProps: {},
  isOpen: false,
  component: 'default',
}

ModalRoot.propTypes = {
  contentProps: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  component: PropTypes.string,
}

const mapStateToProps = state => ({
  ...state.get('modal').toJS(),
})
export default connect(mapStateToProps)(ModalRoot)
