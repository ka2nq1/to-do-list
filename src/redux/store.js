import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { addTodo } from './reducer/addTodo.reducer'

export const store = createStore(addTodo,composeWithDevTools(applyMiddleware(logger)))