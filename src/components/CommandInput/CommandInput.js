/* eslint-disable eqeqeq */
import { useState, useEffect } from 'react'
import { pushTextLogs, pushCommandLogs, pushTournamentLogsAsync, pushSpecificTournamentLogsAsync, pushMatchLogAsync, pushSpecificMatchLogAsync, deleteTournamentAsync } from '../../redux/logs/logs.action'
import { setAPIKey } from '../../redux/user/user.action'
import { connect } from 'react-redux'
import { parseInput } from '../../helper/inputParser'
import axios from '../../api/axiosInstance'
import './CommandInput.scss'

const CommandInput = ({ pushTextLogs, pushTournamentLogsAsync, pushSpecificTournamentLogsAsync, pushMatchLogAsync, pushSpecificMatchLogAsync, deleteTournamentAsync, pushCommandLogs, apiKey, setAPIKey }) => {
  const [inputValue, setInputValue] = useState("")
  
  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  }

  //set axios defaukt apiKey upon state change
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = apiKey;
  }, [apiKey])

  const submitInput = (event) => {
    event.preventDefault()

    //parse input to check if command or just text
    const { isCommand, data } = parseInput(inputValue)

    //print command first
    pushTextLogs(inputValue)

    //check for input first, then exit if not command
    if(!isCommand) return setInputValue("")

    //if input is command
    switch(data[0]){
      //API command
      case "@api":
        if(data.length === 3 && data[1] === "-s" && (data[2][0] == '"' && data[2][data[2].length-1] == '"')){
          setInputValue("")
          setAPIKey(data[2])
          pushTextLogs("API Key has been set")
          return true
        }

        if(data.length === 2 && data[1] === "-g"){
          setInputValue("")
          pushTextLogs(`API Key Used: ${apiKey}`)
          return true
        }

        setInputValue("")
        return pushTextLogs("Invalid Command. Please see @commands for list of commands.")

      //command list
      case "@commands":
        setInputValue("")
        return pushCommandLogs()

      //tournament commands
      case "@tournament":

        //@tournament -a ; get all tournament 
        if(data.length === 2 && data[1] === "-a"){
          setInputValue("")
          return pushTournamentLogsAsync(apiKey)
        }

        //@tournament -s "tournament url" ; get specific tournament via URL
        if(data.length === 3 && data[1] === "-s" && (data[2][0] == '"' && data[2][data[2].length-1] == '"')){
          setInputValue("")
          return pushSpecificTournamentLogsAsync(data[2])
        }

        //@tournament -d "tournament url" ; delete specific tournament via URL
        if(data.length === 3 && data[1] === "-d" && (data[2][0] == '"' && data[2][data[2].length-1] == '"')){
          setInputValue("")
          return deleteTournamentAsync(data[2])
        }

        //default logic if command not found under @tournament
        setInputValue("")
        return pushTextLogs("Invalid Command. Please see @commands for list of commands.")

      //match commands
      case "@match":

        //@match -a "tournament URL"
        if(data.length === 3 && data[1] === "-a" && (data[2][0] == '"' && data[2][data[2].length-1] == '"')){
          setInputValue("")
          return pushMatchLogAsync(data[2])
        }

        //@match -s "tournament URL" "match ID"
        if(data.length === 4 && data[1] === "-s" && (data[2][0] == '"' && data[2][data[2].length-1] == '"') && (data[3][0] == '"' && data[3][data[3].length-1] == '"')){
          setInputValue("")
          return pushSpecificMatchLogAsync(data[2],data[3])
        }

        //default logic if command not found under @tournament
        setInputValue("")
        return pushTextLogs("Invalid Command. Please see @commands for list of commands.")
      

      default:
        //default logic if command not found under all commands
        setInputValue("")
        return pushTextLogs("Invalid Command. Please see @commands for list of commands.")
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

const mapStateToProps = state => ({
  apiKey: state.user.api
})

const mapDispatchToProps = dispatch => ({
  setAPIKey: data => dispatch(setAPIKey(data)),
  pushTextLogs: data => dispatch(pushTextLogs(data)),
  pushCommandLogs: () => dispatch(pushCommandLogs()),
  pushTournamentLogsAsync: () => dispatch(pushTournamentLogsAsync()),
  pushSpecificTournamentLogsAsync: url => dispatch(pushSpecificTournamentLogsAsync(url)),
  pushMatchLogAsync: url => dispatch(pushMatchLogAsync(url)),
  pushSpecificMatchLogAsync: (url, matchId) => dispatch(pushSpecificMatchLogAsync(url, matchId)),
  deleteTournamentAsync: (url) => dispatch(deleteTournamentAsync(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommandInput)