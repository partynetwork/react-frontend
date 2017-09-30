import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

// Import reducers
import { reducer as reduxFormReducer } from 'redux-form/immutable'
import intlProviderReducer from 'containers/IntlProvider/reducer'
import modalReducer from 'containers/ModalProvider/reducer'
import userReducer from './user'

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
})

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      })
    default:
      return state
  }
}

export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    modal: modalReducer,
    language: intlProviderReducer,
    form: reduxFormReducer,
    user: userReducer,
    ...asyncReducers,
  })
}
