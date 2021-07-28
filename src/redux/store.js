import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

//import root reducer
import rootReducer from './root-reducer'

const middlewares = [logger] //add more middlewares if needed

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store