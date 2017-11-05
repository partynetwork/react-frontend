import { fromJS } from 'immutable'

const initialState = fromJS({
})

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return state.merge({
        ...action.payload,
      })
    default:
      return state
  }
}
