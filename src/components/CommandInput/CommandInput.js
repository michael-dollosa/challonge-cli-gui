import { useState } from 'react'
import { pushTextLogs, pushTournamentLogsAsync, pushSpecificTournamentLogsAsync, pushMatchLogAsync } from '../../redux/logs/logs.action'

import { connect } from 'react-redux'
import './CommandInput.scss'
import { parseInput } from '../../helper/inputParser'
import Text from '../Text/Text'

const CommandInput = ({ pushTextLogs, pushTournamentLogsAsync, pushSpecificTournamentLogsAsync, pushMatchLogAsync }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const submitInput = (event) => {
    event.preventDefault()

    //parse input to check if command or just text
    const { isCommand, data } = parseInput(inputValue)
    console.log("parsed data", data)
    //print command first
    pushTextLogs(inputValue)

    //check for input first, then exit
    if(!isCommand) return setInputValue("")

    //if input is command
    switch(data[0]){
      case "@tournament":
        //checking if command for get all tournaments
        if(data.length === 2 && data[1] === "-a"){
          setInputValue("")
          return pushTournamentLogsAsync()
        }

        //checking if command for get specific tournament via url (url must be inside double quotes)
        if(data.length === 3 && data[1] === "-s" && (data[2][0] == '"' && data[2][data[2].length-1] == '"')){
          setInputValue("")
          return pushSpecificTournamentLogsAsync(data[2])
        }

        //default logic if command not found under @tournament
        setInputValue("")
        return pushTextLogs("Invalid Command. Please see command list for possible commands.")
      case "@match":
        //checking if command for get match via url (url must be inside double quotes)
        if(data.length === 3 && data[1] === "-a" && (data[2][0] == '"' && data[2][data[2].length-1] == '"')){
          setInputValue("")
          return pushMatchLogAsync(data[2])
        }

        //default logic if command not found under @tournament
        setInputValue("")
        return pushTextLogs("Invalid Command. Please see command list for possible commands.")
      default:
        //default logic if command not found under all commands
        setInputValue("")
        return pushTextLogs("Invalid Command. Please see command list for possible commands.")
    }
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
  pushSpecificTournamentLogsAsync: url => dispatch(pushSpecificTournamentLogsAsync(url)),
  pushMatchLogAsync: url => dispatch(pushMatchLogAsync(url))
})
export default connect(null, mapDispatchToProps)(CommandInput)