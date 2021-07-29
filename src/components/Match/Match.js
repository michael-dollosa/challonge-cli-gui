import { useState, useEffect } from 'react'
import { getParticipant } from '../../api/participant'
import { defaultIcon } from '../../helper/inputParser'
import './Match.scss'


const Match = ({data, tournamentURL}) => {
  console.log(data)
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const state = data.attributes.state
  const matchId = data.id
  const score = data.attributes.scores
  const player1_id = data.relationships.player1.data.id
  const player2_id = data.relationships.player2.data.id
  console.log(state,score,player1_id,player2_id, tournamentURL)

  useEffect(() => {
    //get details for player 1
    getParticipant(tournamentURL, player1_id)
      .then(res => setPlayer1(res.data.data.attributes.name))
      .catch(err => console.error(err))
    //get details for player 2
    getParticipant(tournamentURL, player2_id)
      .then(res => setPlayer2(res.data.data.attributes.name))
      .catch(err => console.error(err))
  }, [])

  return(
    <section className="match-container">
      
      {
        ((player1 === "") || (player2 === "")) ?
        <section className="match_loading-container">
          <h1>Loading Participants</h1>
        </section>
        : 
        <>
          <h1>{ state }</h1>
          <h3>Match ID: { matchId }</h3>
          <section className="match_participants-container">
            <div className="player">
              <img src = { defaultIcon } alt="icon" />
              <h1>{ player1 }</h1>
            </div>
            
            <div className="player">
              <img src = { defaultIcon } alt="icon" />
              <h1>{ player2 }</h1>
            </div>
          </section>
          <section className="match_scores-container">
            <h1>{ score }</h1>
          </section>
        </>
      }
    </section>
  )
}

export default Match