import axios from 'axios'

function fetchSchools(){

  const url = 'http://localhost:3000/crimes'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_SCHOOLS',
    payload: request
  }
}
export default fetchSchools
