import { getTournaments, getSpecificTournament } from '../../api/tournament'

export const pushTextLogs = data => ({
  type: 'PUSH_TEXT_LOGS',
  payload: {
    type: 'text',
    data: data
  }
})

export const pushTournamentLogs = data => ({
  type: 'PUSH_TOURNAMENT_LOGS',
  payload: {
    type: 'tournament',
    data: data
  }
}) 

export const pushSpecificTournamentLogs = data => ({
  type: 'PUSH_TOURNAMENT_LOGS',
  payload: {
    type: 'specific tournament',
    data: data
  }
}) 

export const pushTournamentLogsAsync = () => {
  return dispatch => {
    dispatch(pushTextLogs("Checking all tournaments from your account"))
    getTournaments()
      .then(response => {
        dispatch(pushTournamentLogs(response.data.data))
      })
      .catch(error => console.error("Redux Get Tournament Error: ", error))
  }
}

export const pushSpecificTournamentLogsAsync = (url) => {
  const modifiedUrl = url.replace(/^"(.*)"$/, '$1')
  return dispatch => {
    dispatch(pushTextLogs(`Checking tournament with url of ${url} from your account`))
    getSpecificTournament(modifiedUrl)
      .then(response => {
        dispatch(pushSpecificTournamentLogs(response.data.data))
      })
      .catch(error => {
        dispatch(pushTextLogs("Command failed. Please double check the URL."))
      })
  }
}