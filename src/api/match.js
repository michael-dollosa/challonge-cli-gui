import axios from './axiosInstance'

//get all matches from tournament
export const getMatches = (url) => {
  return axios.get(`/tournaments/${url}/matches.json`, {data:null})
    .then(res => res)
    .catch(err => console.error(err))
}

//get specific match from tournament
export const getSpecificMatches = (url, matchId) => {
  return axios.get(`/tournaments/${url}/matches/${matchId}.json`, {data:null})
    .then(res => res)
    .catch(err => console.error(err))
}