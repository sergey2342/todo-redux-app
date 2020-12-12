export const ADD_TODO_STARTED = 'ADD_TODO_STARTED'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'
export const ADD_TODO = 'ADD_TODO'


const initialState = {
    loading: true,
    error: null,
    todos: []
}

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO_STARTED:
            console.log('add')
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
                error: action.payload.error
            }
        case ADD_TODO:
            return state
        default:
            return state
    }
}