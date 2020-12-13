import * as axios from 'axios'

import { ADD_TODO_SUCCESS, ADD_TODO_FAILURE, ADD_TODO_STARTED } from '../redux/todosReducer'


function CreateError(error, text) {
    this.message = error.message
    this.text = text
}


export const getTodos = (dispatch) => {
    dispatch({ type: ADD_TODO_STARTED })
    axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(({ data }) => dispatch({ type: ADD_TODO_SUCCESS, payload: data }))
        .catch(error => {
            dispatch({ type: ADD_TODO_FAILURE, payload: { type: 'todos', message: error.message, text: 'Ошибка загрузки задач' }})
            throw new CreateError(error, 'Ошибка загрузки задач')
        })
}