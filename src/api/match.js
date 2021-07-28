import axios from './axiosInstance'

export const getTournaments = () => {
  return axios.get('/tournaments.json', {data:null})
    .then(res => res)
    .catch(err => console.error(err))
}