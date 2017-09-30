/* eslint-disable */
import React, { Component } from 'react'
import ModalRoot from 'containers/ModalProvider'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Text } from 'rebass'
import { fetchUserAction } from './actions'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      userId: '',
      id: '',
      title: [],
      body: [],
    }
  }

  componentDidMount() {
    this.props.fetchUserAction(2)
    this.props.fetchUserAction(3)
    this.props.fetchUserAction(4)
    this.props.fetchUserAction(5)
    this.props.fetchUserAction(6)
    this.props.fetchUserAction(7)
  }

  render() {
    return (
      <div>
        <ModalRoot />
        {JSON.stringify(this.props.user.toJS())}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.get('user')
})
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    fetchUserAction,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
