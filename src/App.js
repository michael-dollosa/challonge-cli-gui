import './App.scss'
import { useEffect } from 'react'
import { getTournaments, getSpecificTournament } from './api/tournament'
import { getSpecificMatches, getMatches } from './api/match'
import CommandPage from './components/CommandPage/CommandPage'
import Tournaments from './components/Tournaments/Tournaments'
const App = () => {
  useEffect(() => {
    getMatches("idctcvg1")
      .then(res => console.log(res))
      .catch(err => err)

    
  }, [])
  return(
    <>
    <CommandPage />
    </>
  )
}

export default App