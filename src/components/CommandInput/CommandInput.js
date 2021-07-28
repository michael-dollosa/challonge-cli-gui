import { useState } from 'react'
import './CommandInput.scss'

const CommandInput = () => {
  const [inputValue, setInputValue] = useState("")

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  }
  return(
    <section className="command_input-container">
      <form action="">
        <input 
          type="text" 
          value={ inputValue }
          onChange={ event => handleInputValue(event) }
        />
      </form>
    </section>
  )
}

export default CommandInput