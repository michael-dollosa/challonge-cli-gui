import { useState } from 'react'
import { pushTextLogs } from '../../redux/logs/logs.action'

import { connect } from 'react-redux'
import './CommandInput.scss'
import { parseInput } from '../../helper/inputParser'

const CommandInput = ({ pushTextLogs }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const submitInput = (event) => {
    event.preventDefault()
    console.log("triggered Submit")
    //edit me (when additional features like parsing input is added)

    //parse input to check if command or just text
    const { isCommand, data } = parseInput(inputValue)

    //check for input first
    if(!isCommand) {
      setInputValue("")
      return pushTextLogs(data)
    } 
    console.log("input is a command")

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
  pushTextLogs: data => dispatch(pushTextLogs(data))
})
export default connect(null, mapDispatchToProps)(CommandInput)