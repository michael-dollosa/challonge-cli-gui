import './Tournaments.scss'
import { defaultIcon } from '../../helper/inputParser'
const Tournaments = ({ data }) => {
  
  const link = data.attributes.fullChallongeUrl
  const name = data.attributes.name
  // const state = data.attributes.state
  // const date = data.attributes.timestamps.startsAt
  // const icon = data.attributes.liveImageUrl
  // const participantCount = data.relationships.matches.links.meta.count

  return(
    <section className="tournaments-container">
      <img src = { defaultIcon } alt="icon" />
      <h1>{ name }</h1>
      <a href={ link } target="_blank" rel="noreferrer"><h3>Go to Challonge</h3></a>
    </section>
  )
}

export default Tournaments