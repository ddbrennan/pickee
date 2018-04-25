import {BASE_URL} from '../constants.js'

class AuthAdapter {

  static login(loginParams) {
    return fetch(`${BASE_URL}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static current_user() {
    return fetch(`${BASE_URL}/current_user`, {
      headers: headers()
    }).then(res => res.json())
  }

}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}

export default AuthAdapter