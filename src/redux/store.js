import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import { todosReducer } from './todosReducer'

const reducer = combineReducers({
    todos: todosReducer,
    form: formReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store