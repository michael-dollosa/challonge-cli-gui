import './Text.scss'

const Text = ({ data }) => {
  return(
    <p className="logs-text">
      <p><span className="pound">#</span> <span className="user">challonge-api-gui</span> at <span className="directory">your-own-browser</span> in <span className="directory">challonge-app</span>~/ on git:<span className="git">master</span></p>
      { data }
    </p>
  )
}

export default Text