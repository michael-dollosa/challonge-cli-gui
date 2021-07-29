import { useState } from 'react'
import { pushTextLogs, pushTournamentLogsAsync, pushSpecificTournamentLogsAsync } from '../../redux/logs/logs.action'

import { connect } from 'react-redux'
import './CommandInput.scss'
import { parseInput } from '../../helper/inputParser'
import Text from '../Text/Text'

const CommandInput = ({ pushTextLogs, pushTournamentLogsAsync, pushSpecificTournamentLogsAsync }) => {
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
        if(data.length === 2 && data[1] === "-a"){
          setInputValue("")
          return pushTournamentLogsAsync()
        }
        if(data.length === 3 && data[1] === "-s"){
          setInputValue("")
          return pushSpecificTournamentLogsAsync(data[2])
        }

        setInputValue("")
        return pushTextLogs("Invalid Command. Please see Command List for possible commands.")
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
          placeholder="Type your command"
          value={ inputValue }
          onChange={ event => handleInputValue(event) }
          minLength="1"
        />
      </form>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  pushTextLogs: data => dispatch(pushTextLogs(data)),
  pushTournamentLogsAsync: () => dispatch(pushTournamentLogsAsync()),
  pushSpecificTournamentLogsAsync: url => dispatch(pushSpecificTournamentLogsAsync(url))
})
export default connect(null, mapDispatchToProps)(CommandInput)