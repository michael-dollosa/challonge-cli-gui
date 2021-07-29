import './Text.scss'

const Text = ({ data }) => {
  return(
    <p className="logs-text">
      <p><span className="pound">#</span> <span className="user">beautiful-user</span> at <span className="directory">your-own-browser</span> in <span className="directory">~/challonge-app-gui</span> on git:<span className="git">master</span></p>
      <span className="arrow">&#10150;</span> { data }
    </p>
  )
}

export default Text