import './App.scss'
import { useEffect } from 'react'
import { getTournaments, getSpecificTournament } from './api/tournament'
import CommandPage from './components/CommandPage/CommandPage'
import Tournaments from './components/Tournaments/Tournaments'
const App = () => {
  useEffect(() => {
    getTournaments()
      .then(res => console.log(res))
      .catch(err => err)

    getSpecificTournament('r6siege_tournament_xx')
      .then(res => console.log("Get Tournanebt", res))
      .catch(err => err)
    
  }, [])
  return(
    <>
    <CommandPage />
    </>
  )
}

export default App