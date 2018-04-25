export default (state = [{
  isLoggedIn: false,
  user: {}
}], action) => {
  switch(action.type) {
    case 'LOG IN':
      return { isLoggedIn: true, user: action.user }
    case 'LOG OUT':
      return { isLoggedIn: false, user: {} }
    default:
      return state
  }
}