import * as axios from 'axios'

import { 
    ADD_TODO_SUCCESS, 
    ADD_TODO_FAILURE, 
    ADD_TODO_STARTED, 
    CHECKED_TODO 
} from '../redux/todosReducer'


function CreateError(error, text) {
    this.message = error.message
    this.text = text
}


export const getTodos = dispatch => {
    dispatch({ type: ADD_TODO_STARTED })
    axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(({ data }) => dispatch({ type: ADD_TODO_SUCCESS, payload: data }))
        .catch(error => {
            dispatch({ type: ADD_TODO_FAILURE, payload: { type: 'getTodos', message: error.message, text: 'Ошибка загрузки задач' }})
            throw new CreateError(error, 'Ошибка загрузки задач')
        })
}

export const checkedTodo = (dispatch, item) => {
    axios.patch(`https://jsonplaceholder.typicode.com/todos/${item.id}`, {...item, completed: !item.completed })
        .then(({ data }) => dispatch({ type: CHECKED_TODO, payload: data }))
        .catch(error => {
            dispatch({ type: ADD_TODO_FAILURE, payload: { type: 'checkedTodos', message: error.message, text: 'Ошибка отправки данных' }})
            throw new CreateError(error, 'Ошибка отправки данных')
        })
}