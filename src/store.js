import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import { autoRehydrate } from 'redux-persist-immutable'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'

import createReducer from './reducers'
import mySaga from './saga'

// Redux Saga for side effect promise
const sagaMiddleware = createSagaMiddleware()

export default (initialState = {}, history) => {
  // Create the store with middleware
  // 1. routerMiddleware: Syncs the location/URL path to the state
  // 2. sagaMiddleware: Makes redux-sagas work
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
  ]
  const enhancers = [
    applyMiddleware(...middlewares),
    autoRehydrate(),
  ]
  if (__DEV__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools')
    if (window.devToolsExtension) {
      enhancers.push(window.devToolsExtension())
    }
    enhancers.push(persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))
  }

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers),
  )

  // Extensions
  store.runSaga = sagaMiddleware.run(mySaga)
  store.asyncReducers = {} // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default
        const nextReducers = createReducers(store.asyncReducers)
        store.replaceReducer(nextReducers)
      })
    })
  }
  return store
}
