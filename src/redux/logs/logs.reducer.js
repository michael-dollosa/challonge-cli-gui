//set default state to avoid state being undefined
const DEFAULT_STATE = [
  {
    type: "text",
    data: "Hi new user, welcome to the Challong CLI GUI or whatever you call it. First things first. Please setup your API Key. You may check the command using @commands"
  },
  
]

//sample reducer format
const chatReducer = (state = DEFAULT_STATE, action) => {

  //switch statement based on action passed
  switch(action.type) {
    case 'PUSH_TEXT_LOGS':
      //sample return value
      return [...state, action.payload]
    case 'PUSH_TOURNAMENT_LOGS':
      return [...state, action.payload]
    case 'PUSH_COMMAND_LOGS':
      return [...state, action.payload]
    default:
      return state
  }

  

}

export default chatReducer