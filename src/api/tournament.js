import axios from './axiosInstance'

//get all tournament created by user
export const getTournaments = () => {
  return axios.get('/tournaments.json', {data:null})
    .then(res => res)
    .catch(err => console.error(err))
}

//get specific tournament data via url
export const getSpecificTournament = (url) => {
  console.log("specific tournament api dispatch")
  return axios.get(`/tournaments/${url}.json`, {data:null})
    .then(res => res)
    .catch(err => console.error(err))
}

//delete specific tournament via url
export const deleteTournament = (url) => {
  return axios.delete(`/tournaments/${url}.json`, {data:null})
    .then(res => res)
    .catch(err => console.error(err))
}

//modify specific tournament via url
export const modifyTournament = (url, data) => {
  return axios.put(`/tournaments/${url}.json`, {data})
    .then(res => res)
    .catch(err => console.error(err))
}

//create tournament via url
export const createTournaments = (data) => {
  return axios.post('/tournaments.json', {data})
    .then(res => res)
    .catch(err => console.error(err))
}