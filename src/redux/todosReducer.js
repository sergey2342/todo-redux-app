import getApi, { CreateError } from '../services/api'
 

export const ADD_TODO_STARTED = 'ADD_TODO_STARTED'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'
export const ADD_TODO = 'ADD_TODO'
export const CHECKED_TODO = 'CHECKED_TODO'


const initialState = {
    loading: false,
    error: null,
    todos: []
}

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO_STARTED:
            return { ...state, loading: true }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                todos: action.payload
            }
        case ADD_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CHECKED_TODO:
            const index = state.todos.findIndex(item => item.id === action.payload.id),
                  old = state.todos[index],
                  newItem = {...old, completed : !old.completed},
                  newArr = [...state.todos.slice(0, index), newItem, ...state.todos.slice(index + 1)];
                  
            return {
                ...state,
                todos: newArr
            }
        case ADD_TODO:
            return state
        default:
            return state
    }
}



export const getTodosThunk = dispatch => {
    dispatch({ type: ADD_TODO_STARTED })

    getApi.getTodos()
        .then(({ data }) => dispatch({ type: ADD_TODO_SUCCESS, payload: data }))
        .catch(error => {
            dispatch({ type: ADD_TODO_FAILURE, payload: { type: 'getTodos', message: error.message, text: 'Ошибка загрузки задач' }})
            throw new CreateError(error, 'Ошибка загрузки задач')
        })
}

export const checkedTodoThunk = item => dispatch => {
    getApi.checkedTodo(item)
        .then(({ data }) => dispatch({ type: CHECKED_TODO, payload: data }))
        .catch(error => {
            dispatch({ type: ADD_TODO_FAILURE, payload: { type: 'checkedTodos', message: error.message, text: 'Ошибка отправки данных' }})
            throw new CreateError(error, 'Ошибка отправки данных')
        })
}