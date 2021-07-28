export const pushTextLogs = data => ({
  type: 'SET_TEXT_LOGS',
  payload: {
    type: 'text',
    data: data
  } //set value you want to pass to reducer
})

export const pushTournamentLogs = data => ({
  type: 'SET_TOURNAMENT_LOGS',
  payload: {
    type: 'tournament',
    data: data
  } //set value you want to pass to reducer
})