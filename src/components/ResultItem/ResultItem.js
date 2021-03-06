
import CommandList from '../CommandList/CommandList'
import Match from '../Match/Match'
import Text from '../Text/Text'
import Tournaments from '../Tournaments/Tournaments'
import './ResultItem.scss'

const ResultItem = ({ item }) => {

  const renderItem = item => {
    switch(item.type){

      case "command":
        return <CommandList />

      case "text":
        return <Text data={ item.data } />

      case "tournament":
        const generatedTournamentComponent = item.data.map(tournament => <Tournaments data={ tournament } key={ tournament.id }/>)
        return generatedTournamentComponent

      case "specific tournament":
        return <Tournaments data={ item.data } />

      case "match":
        const generatedMatchComponent = item.data.map(match => <Match data={ match } tournamentURL={ item.tournamentURL } key={ match.id }/>)
        //match data can be empty when tournament have not been started. check first condition
        if(item.data.length === 0) return <Text data={ "Tournament have not yet started. Kindly start the tournament first before accessing matches." } />

        //return matches
        return generatedMatchComponent
      case "specific match":
        return <Match data={ item.data } tournamentURL={ item.tournamentURL }/>

      default:
        return <Text data="Invalid input. Please try again." />
     }
   }

  return(
    <section className="result_item-container">
      { renderItem(item) }
    </section>
  )
}

export default ResultItem