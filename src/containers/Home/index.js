import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Helmet } from 'react-helmet'
import injectSaga from 'utils/injectSaga'
import { changeLocale } from 'containers/IntlProvider/actions'
import SwitchLocale from 'components/SwitchLocale'
import { Heading } from 'rebass'

import { fetchUserAction } from './actions'
import saga from './saga'
import messages from './messages'

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchUserAction(583)
  }

  render() {
    const {intl, changeLocale} = this.props
    return (
      <article>
        <Helmet>
          <title>{intl.formatMessage(messages.pageTitle)}</title>
        </Helmet>
        <SwitchLocale onChange={changeLocale} />
        <Heading is="h4" color="red">
          Home page
        </Heading>
        {JSON.stringify(this.props.user.toJS())}
      </article>
    )
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
  fetchUserAction: PropTypes.func,
  changeLocale: PropTypes.func,
  intl: PropTypes.object,
}
Home.defaultProps = {
  fetchUserAction: () => null,
  changeLocale: () => null,
  intl: {},
}

const mapStateToProps = state => ({
  user: state.get('user'),
  // language: state.get('language'),
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    fetchUserAction,
    changeLocale,
  }, dispatch),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withSaga = injectSaga({key: 'home', saga})

export default compose(
  withConnect,
  withSaga,
  injectIntl,
)(Home)
