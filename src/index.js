import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { persistStore } from 'redux-persist-immutable'
import IntlProvider from 'containers/IntlProvider'
import configure from './store'
import RootRoutes from './routes'

// Import i18n messages
import { translationMessages } from './i18n'

// Import scss global style
import 'bootstrap-reboot' // eslint-disable-line
import './global.scss'

const browserHistory = createHistory()
// Initial store from server if you want
const store = configure({}, browserHistory)

const render = (translatedMessages) => {
  ReactDOM.render(
    <Provider store={store} persistor={persistStore(store, {whitelist: ['language']})}>
      <IntlProvider messages={translatedMessages}>
        <ConnectedRouter history={browserHistory}>
          <RootRoutes />
        </ConnectedRouter>
      </IntlProvider>
    </Provider>,
    document.getElementById('app'),
  )
}

if (module.hot) {
  module.hot.accept('./routes', () => {
    render(translationMessages)
  })
}

if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'))
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
      import('intl/locale-data/jsonp/th.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err
    })
} else {
  render(translationMessages)
}
