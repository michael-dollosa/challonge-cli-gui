const DEFAULT_STATE = {
  api: process.env.REACT_APP_CHALLONGE_API_KEY ? process.env.REACT_APP_CHALLONGE_API_KEY : "use @commands to check how to setup API Key"
}

const userReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'SET_USER_API_KEY':
      return action.payload
    default:
      return state
  }
}

export default userReducer