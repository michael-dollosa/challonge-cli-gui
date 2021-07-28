import ResultItem from '../ResultItem/ResultItem'
import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import './CommandResult.scss'

const CommandResult = ({ logs }) => {
  const ref = useRef(null)

  useEffect(() => {
    ref?.current?.scrollIntoView({
      behavior: "smooth"
    })
  },[logs])

  const generatedLogs = logs.map(item => (
    <ResultItem item={ item } />
  ))

  

  return(
    <section className="command_result-container">
      <div className="command_result-main">
        { generatedLogs }
        <div className="command_result-bottom" ref={ ref }></div>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  logs: state.logs
})

export default connect(mapStateToProps)(CommandResult)