import { CHANGE_LOCALE } from './constants'

/**
 * Dispatched when change locale
 *
 * @param  {string} locale The new locale
 *
 * @return {object}
 */
export function changeLocale(locale) {
  return {
    type: CHANGE_LOCALE,
    locale,
  }
}

export default {
  changeLocale,
}
