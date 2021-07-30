import { combineReducers } from 'redux'
import logsReducer from './logs/logs.reducer'
import userREducer from './user/user.reducer'

export default combineReducers({
  //set name of reducer: reducer imported
  logs: logsReducer,
  user: userREducer
})