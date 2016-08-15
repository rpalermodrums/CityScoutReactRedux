import axios from 'axios'

function fetchSubways(){

  const url = 'http://localhost:3000/subways'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_SUBWAYS',
    payload: request
  }
}
export default fetchSubways
