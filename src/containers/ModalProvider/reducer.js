import { fromJS } from 'immutable'
import { SHOW_UI_DIALOG, CLOSE_UI_DIALOG } from 'containers/ModalProvider/constants'

const initialState = fromJS({
  isOpen: false,
  component: null,
  contentProps: {},
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_UI_DIALOG:
      return state.set('isOpen', true)

    case CLOSE_UI_DIALOG:
      return state.set('isOpen', false)
    default :
      return state
  }
}
