import React from 'react'
import { useDispatch } from 'react-redux'
import { reset } from 'redux-form'

import * as styles from './AddTodo.module.scss'
import { addTodoThunk } from '../../redux/todosReducer'
import AddTodoForm from './AddTodoForm'

const AddTodo = () => {
    const dispatch = useDispatch()
    
    const submitForm = postData => {
        if(postData.name) {
            dispatch(addTodoThunk(postData.name))
            dispatch(reset('add-todo'))
        }
    }

    return (
        <div className={styles.add_todo}>
            <div className={styles.add_todo_title}>Добавление задачи</div>
            <AddTodoForm onSubmit={submitForm}/>
        </div>
    )
}

export default AddTodo