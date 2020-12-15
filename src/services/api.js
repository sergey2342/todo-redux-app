import * as axios from 'axios'

const instance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })

export function CreateError(error, text) {
    this.message = error.message
    this.text = text
}

const getApi = {
    getTodos: () => instance.get('todos/'),
    checkedTodo: item => instance.put(`todos/${item.id}`, {...item, completed: !item.completed }),
    addTodo: item => instance.post('todos/', item)
}

export default getApi