import * as axios from 'axios'
// import { useDispatch } from 'react-redux'



export const getTodos = (dispatch, actionType) => {

    axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(({ data }) => {
            console.log(data)
            dispatch({ type: actionType, payload: data })
        })
}