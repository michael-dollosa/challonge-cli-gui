import ResultItem from '../ResultItem/ResultItem'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import './CommandResult.scss'

const CommandResult = ({ logs }) => {
  
  const generatedLogs = logs.map(item => (
    <ResultItem item={ item } />
  ))

  useEffect(() => {
    
  }, [logs])
  return(
    <section className="command_result-container">
      { generatedLogs }
    </section>
  )
}

const mapStateToProps = state => ({
  logs: state.logs
})

export default connect(mapStateToProps)(CommandResult)