import { call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import axios from 'axios'
import { SHOW_UI_DIALOG, CLOSE_UI_DIALOG } from 'containers/ModalProvider/constants'

function* fetchUser(action) {
  yield put({ type: SHOW_UI_DIALOG, component: 'loading', contentProps: {} })
  yield delay(2000)
  try {
    const { data } = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts/${action.userId}`)
    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: data })
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
  yield put({ type: CLOSE_UI_DIALOG })
}

export default function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
}
