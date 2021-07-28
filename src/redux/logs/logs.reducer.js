//set default state to avoid state being undefined
const DEFAULT_STATE = [
  {
    type: "",
    data: null
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
    case 'SET_LOGS':
      //sample return value
      return {
        state: [...state, ...action.payload]
      }
    
    default:
      return state
  }
}

export default chatReducer