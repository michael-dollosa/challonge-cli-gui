
import CommandInput from '../CommandInput/CommandInput'
import CommandResult from '../CommandResult/CommandResult'
import './CommandPage.scss'

const CommandPage = () => {

  return(
    <section className="command_page-container">
      <section className="command_page-main">
        <CommandResult />
      </section>
      <section className="command_page-footer">
        <CommandInput />
      </section>
      
    </section>
  )
}

export default CommandPage