import get from 'lodash/get'
import has from 'lodash/has'

export default (props, color) => {
  if (has(props, `theme.colors.${color}`)) {
    return get(props, `theme.colors.${color}`)
  } else if (/^#[0-9A-F]{6}$/i.test(color) || ['transparent', 'inherit'].includes(color)) {
    return color
  }
  return 'inherit'
}
