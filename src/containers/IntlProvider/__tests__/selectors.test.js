import {selectLocale,selectLanguage} from '../selectors'
import reducer,{initialState} from '../reducer'
import {DEFAULT_LOCALE} from 'containers/App/constants'
describe('Test Intl Selectors', ()=> {
    test('It can get language',() => {
        const mockReducers = {
            language:initialState
        }
        expect(selectLanguage(mockReducers)).toEqual(initialState)
    })
    test('It can get selectLocale equal DEFAULT_LOCALE',() => {
        const selector = selectLocale()
        const mockReducers = {
            language:initialState
        }
        expect(selector(mockReducers)).toEqual(DEFAULT_LOCALE)
    })
})