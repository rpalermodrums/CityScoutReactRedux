import Axios from 'axios'
<<<<<<< HEAD
// import {browserHistory} from 'react'
=======

>>>>>>> a6fc99832d6cb4f579b54b69869fe194799b480c

function fetchScores(address){

  const url = `http://localhost:3001/api/v1/voting_districts?full_address=${address}`

  const response = Axios.get(url)
  return {
    type: 'FETCH_SCORES',
    payload: response
  }
}
export default fetchScores
