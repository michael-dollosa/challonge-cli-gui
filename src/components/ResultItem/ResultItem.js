
import Text from '../Text/Text'
import Tournaments from '../Tournaments/Tournaments'
import './ResultItem.scss'

const ResultItem = ({ item }) => {

  const renderItem = item => {
    switch(item.type){
      case "text":
        return(
          <Text data={ item.data } />
        )
      case "tournament":
        const generatedTournamentComponent = item.data.map(tournament => {
          return (
              <Tournaments data={ tournament } />
          )
        })
        return generatedTournamentComponent
      case "specific tournament":
        return (
          <Tournaments data={ item.data } />
        )
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