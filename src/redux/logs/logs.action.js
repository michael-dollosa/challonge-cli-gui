import { getTournaments, getSpecificTournament } from '../../api/tournament'
import { getSpecificMatches, getMatches } from '../../api/match'

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

const removeParticipantsInMatchData = (data) => {
  const filteredMatches = data.filter(match => {
    if(match.type==="participant" || !("player1" in match?.relationships) || !("player2" in match?.relationships)) return false

    return true
  })
  return filteredMatches
}

export const pushMatchLogs = (data, tournamentURL) => ({
  type: 'PUSH_TOURNAMENT_LOGS',
  payload: {
    type: 'match',
    data: removeParticipantsInMatchData(data),
    tournamentURL: tournamentURL
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


export const pushMatchLogAsync = (url) => {
  const modifiedUrl = url.replace(/^"(.*)"$/, '$1')
  return dispatch => {
    dispatch(pushTextLogs(`Checking matches of tournament with url of ${url} from your account`))
    getMatches(modifiedUrl)
      .then(response => {
        // console.log("Match Response", response)
        dispatch(pushMatchLogs(response.data.included, modifiedUrl))
      })
      .catch(error => {
        dispatch(pushTextLogs("Command failed. Please double check the URL."))
      })
  }
}