import {BASE_URL} from '../constants.js'

class SuggestionsAdapter {

  static createSuggestions(data) {
    return fetch(`${BASE_URL}/parties`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(data)
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

export default SuggestionsAdapter