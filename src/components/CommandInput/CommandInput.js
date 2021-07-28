import { useState } from 'react'
import { pushTextLogs, pushTournamentLogsAsync } from '../../redux/logs/logs.action'

import { connect } from 'react-redux'
import './CommandInput.scss'
import { parseInput } from '../../helper/inputParser'

const CommandInput = ({ pushTextLogs, pushTournamentLogsAsync }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const submitInput = (event) => {
    event.preventDefault()

    //parse input to check if command or just text
    const { isCommand, data } = parseInput(inputValue)

    //check for input first
    if(!isCommand) {
      setInputValue("")
      return pushTextLogs(data)
    } 

    //logic for command
    switch(data[0]){
      case "@tournament":
        if(data[1] === "-a"){
          setInputValue("")
          return pushTournamentLogsAsync()
        }

      break
      default:
        setInputValue("")
        return console.log("invalid command")
    }

    //reset input
    setInputValue("")
  }

  return(
    <section className="command_input-container">
      <form onSubmit={ event => submitInput(event) }>
        <input 
          type="text" 
          value={ inputValue }
          onChange={ event => handleInputValue(event) }
        />
      </form>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  pushTextLogs: data => dispatch(pushTextLogs(data)),
  pushTournamentLogsAsync: () => dispatch(pushTournamentLogsAsync())
})
export default connect(null, mapDispatchToProps)(CommandInput)