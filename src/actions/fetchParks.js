import axios from 'axios'

function fetchParks(){

  const url = 'http://localhost:3000/crimes'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_PARKS',
    payload: request
  }
}
export default fetchParks
