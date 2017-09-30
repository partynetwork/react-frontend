export const fetchUserAction = userId => ({
  type: 'USER_FETCH_REQUESTED',
  userId,
})

export default {
  fetchUserAction,
}
