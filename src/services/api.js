import * as axios from 'axios'

// const instance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })
// https://my-json-server.typicode.com/sergey2342/todo-redux-app-db/
const instance = axios.create({ baseURL: 'http://localhost:3001/' })

export function CreateError(error, text) {
    this.message = error.message
    this.text = text
}

const getApi = {
    getTodos: () => instance.get('todos/'),
    checkedTodo: item => instance.put(`todos/${item.id}`, {...item, completed: !item.completed }),
    addTodo: item => instance.post('todos/', item),
    removeTodo: id => instance.delete(`todos/${id}`)
}

export default getApi