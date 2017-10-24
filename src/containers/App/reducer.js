import { fromJS } from 'immutable'

import {
  LOAD_USER_SUCCESS,
  LOAD_USER,
  LOAD_USER_FAILURE,
} from './constants'

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  user: null,
})


function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData'], null)
    case LOAD_USER_SUCCESS:
      return state
        .setIn(['userData'], action.userData)
        .set('loading', false)
    case LOAD_USER_FAILURE:
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state
  }
}

export default appReducer
