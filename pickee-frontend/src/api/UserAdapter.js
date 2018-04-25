import {BASE_URL} from '../constants.js'

class UserAdapter {

  static createUser(user) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(user)
    })
  }
}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}

export default UserAdapter