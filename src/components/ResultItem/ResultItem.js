
import Text from '../Text/Text'
import './ResultItem.scss'

const ResultItem = ({ item }) => {

   const renderItem = item => {
     switch(item.type){
       case "text":
         return(
           <Text data={ item.data } />
         )
        case "tournament":
          return(
            <Text data={ item.data } />
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