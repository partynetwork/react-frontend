import { fromJS } from 'immutable'
import pick from 'lodash/pick'

const initialState = fromJS({
  id: null,
  userId: null,
  title: null,
  body: null,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return state.merge({
        ...pick(action.payload, ['id', 'userId', 'title', 'body']),
      })
    default:
      return state
  }
}
