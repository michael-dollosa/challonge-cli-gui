import { getTournaments, getSpecificTournament } from '../../api/tournament'

export const pushTextLogs = data => ({
  type: 'PUSH_TEXT_LOGS',
  payload: {
    type: 'text',
    data: data
  } //set value you want to pass to reducer
})

// export const pushTournamentLogs = data => ({
//   type: 'PUSH_TOURNAMENT_LOGS',
//   payload: {
//     type: 'tournament',
//     data: data
//   } //set value you want to pass to reducer
// })

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
    console.log("all tournament api reducer")
    getTournaments()
      .then(response => {
        dispatch(pushTextLogs("Displaying all tournaments from your account"))
        dispatch(pushTournamentLogs(response.data.data))
      })
      .catch(error => console.error("Redux Get Tournament Error: ", error))
  }
}

export const pushSpecificTournamentLogsAsync = (url) => {
  return dispatch => {
    console.log("specific tournament api reducer")
    getSpecificTournament(url)
      .then(response => {
        dispatch(pushTextLogs(`Displaying tournament with url of ${url} from your account`))
        dispatch(pushSpecificTournamentLogs(response.data.data))
      })
      .catch(error => {
        dispatch(pushTextLogs("Command failed. Please double check the URL."))
      })
  }
}