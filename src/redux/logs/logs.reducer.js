//set default state to avoid state being undefined
const DEFAULT_STATE = [
  {
    type: "text",
    data: "Hello World"
  },
  {
    type: "text",
    data: "Hello World 2"
  },
  {
    type: "not text",
    data: "Hello World"
  }
]

/*
[
  {
    type: "command" | "text",
    data: data
  }
]

*/
//sample reducer format
const chatReducer = (state = DEFAULT_STATE, action) => {

  //switch statement based on action passed
  switch(action.type) {
    case 'PUSH_TEXT_LOGS':
      //sample return value
      return [...state, action.payload]
  case 'PUSH_TOURNAMENT_LOGS':
      return [...state, action.payload]
    default:
      return state
  }
}

export default chatReducer