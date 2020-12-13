import * as axios from 'axios'

import { ADD_TODO_SUCCESS, ADD_TODO_FAILURE, ADD_TODO_STARTED } from '../redux/todosReducer'



export const getTodos = (dispatch) => {
    dispatch({ type: ADD_TODO_STARTED })
    axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(({ data }) => dispatch({ type: ADD_TODO_SUCCESS, payload: data }))
        .catch(() => {
            const newError = new Error('Ошибка загрузки задач')
            dispatch({ type: ADD_TODO_FAILURE, payload: { type: 'todos', text: newError.message }})
        })
}