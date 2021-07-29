
import './CommandList.scss'

const CommandList = () => {

  return(
    <section className="command_list-container">

    <h2>API Key commands</h2>
    <div className="command_list-item-container">
      <section className="command_list-commands">
      <h1>@api -g</h1>
      </section>
      <section className="command_list-description">
      <h1>Get current API Key used</h1>
      </section>
    </div>
    <div className="command_list-item-container">
      <section className="command_list-commands">
      <h1>@api -s "api key"</h1>
      </section>
      <section className="command_list-description">
      <h1>Set API key to be used</h1>
      </section>
    </div>

    <h2>Tournament commands</h2>
    <div className="command_list-item-container">
      <section className="command_list-commands">
      <h1>@tournament -a</h1>
      </section>
      <section className="command_list-description">
      <h1>Get all tournment name with redirect links</h1>
      </section>
    </div>

    <div className="command_list-item-container">
      <section className="command_list-commands">
      <h1>@tournament -s "tournament url" </h1>
      </section>
      <section className="command_list-description">
      <h1>Get specific tournament</h1>
      </section>
    </div>

    <div className="command_list-item-container">
      <section className="command_list-commands">
      <h1>@tournament -d "tournament url" </h1>
      </section>
      <section className="command_list-description">
      <h1>Delete specific tournament</h1>
      </section>
    </div>


    <h2>Match commands</h2>

    <div className="command_list-item-container">
      <section className="command_list-commands">
      <h1>@match -a "tournament URL"</h1>
      </section>
      <section className="command_list-description">
      <h1>Get all matches of tournament</h1>
      </section>
    </div>

    <div className="command_list-item-container">
      <section className="command_list-commands">
      <h1>@match -s "tournament URL" "Match ID"</h1>
      </section>
      <section className="command_list-description">
      <h1>Get specific match based on tournament URL</h1>
      </section>
    </div>


    </section>
  )
}

export default CommandList