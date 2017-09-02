/* eslint-disable */
import reducer, { initialState } from '../reducer'

describe('Test Intl Reducer', () => {
  test('Default state is equal `initialState` ', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })
  it('should set new app language in reducer', () => {
    const actual = reducer(initialState, {
      type: 'intl/CHANGE_LOCALE',
      locale: 'en',
    })
    expect(actual.locale).toEqual('en')
  })
})
