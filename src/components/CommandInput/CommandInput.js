import { useState } from 'react'
import { pushLogs } from '../../redux/logs/logs.action'

import { connect } from 'react-redux'
import './CommandInput.scss'

const CommandInput = ({ pushLogs }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const submitInput = (event) => {
    event.preventDefault()
    //edit me (when additional features like parsing input is added)
    const data = {
      type: "text",
      data: inputValue
    }
    pushLogs(data)

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
  pushLogs: data => dispatch(pushLogs(data))
})
export default connect(null, mapDispatchToProps)(CommandInput)