/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { IntlProvider } from 'react-intl'
import { DEFAULT_LOCALE } from 'containers/App/constants'
import { selectLocale } from './selectors'

const Provider = props => (
  <IntlProvider locale={props.locale} key={props.locale} messages={props.messages[props.locale]}>
    {React.Children.only(props.children)}
  </IntlProvider>
)

Provider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
}

Provider.defaultProps = {
  locale: DEFAULT_LOCALE,
  messages: {},
}

const mapStateToProps = createSelector(
  selectLocale(),
  locale => ({ locale }),
)

export default connect(mapStateToProps)(Provider)
