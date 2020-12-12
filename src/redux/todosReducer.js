export const ADD_TODO = 'ADD_TODO'

export const todosReducer = (state = {value: 0}, action) => {
    switch(action.type) {
        case ADD_TODO:
            return state
        default:
            return state
    }
}