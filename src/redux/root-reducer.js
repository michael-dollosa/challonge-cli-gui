import { combineReducers } from 'redux'
import logsReducer from './logs/logs.reducer'

export default combineReducers({
  //set name of reducer: reducer imported
  logs: logsReducer
})