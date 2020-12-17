import * as axios from 'axios'

const instance = axios.create({ baseURL: 'https://todo-redux-app-575be-default-rtdb.firebaseio.com' })

export function CreateError(error, text) {
    this.message = error.message
    this.text = text
}

const getApi = {
    getTodos: () => instance.get('/todos.json'),
    checkedTodo: item => instance.put(`/todos/${item.id}.json`, {title: item.title, completed: !item.completed }),
    addTodo: item => instance.post('/todos.json', item),
    removeTodo: id => instance.delete(`/todos/${id}.json`)
}

export default getApi