import axios from 'axios'

function fetchScores(){

  const url = 'http://localhost:3000/scores'
  const request = axios.get(url)
  console.log('request', request)

  return {
    type: 'FETCH_SCORES',
    payload: request
  }
}
export default fetchScores
