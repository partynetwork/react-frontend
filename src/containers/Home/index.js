import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import injectSaga from 'utils/injectSaga'

import { fetchUserAction } from './actions'
import saga from './saga'

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchUserAction(7)
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        {JSON.stringify(this.props.user.toJS())}
      </article>
    )
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
  fetchUserAction: PropTypes.func,
}
Home.defaultProps = {
  fetchUserAction: () => null,
}
const mapStateToProps = state => ({
  user: state.get('user'),
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    fetchUserAction,
  }, dispatch),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withSaga = injectSaga({key: 'home', saga})

export default compose(
  withConnect,
  withSaga,
)(Home)
