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

export const pushTournamentLogsAsync = () => {
  return dispatch => {
    getTournaments()
      .then(response => {
        dispatch(pushTournamentLogs(response.data.data))
      })
      .catch(error => console.error("Redux Get Tournament Error: ", error))
  }
}