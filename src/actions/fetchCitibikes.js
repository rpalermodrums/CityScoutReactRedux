import axios from 'axios'

function fetchCitibikes(){

  const url = 'http://localhost:3000/citibikes'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_CITIBIKES',
    payload: request
  }
}
export default fetchCitibikes
