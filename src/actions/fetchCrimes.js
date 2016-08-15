import axios from 'axios'

function fetchCrimes(){

  const url = 'http://localhost:3000/crimes'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_CRIMES',
    payload: request
  }
}
export default fetchCrimes
