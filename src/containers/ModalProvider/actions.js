import { SHOW_UI_DIALOG, CLOSE_UI_DIALOG } from 'containers/ModalProvider/constants'

export const showModalDialog = (payload) => {
  return {
    type: SHOW_UI_DIALOG,
    ...payload
  }
}

export const closeModalDialog = () => {
  return {
    type: CLOSE_UI_DIALOG,
  }
}
