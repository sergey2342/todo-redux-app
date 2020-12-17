import React from 'react'
import { Field, reduxForm } from 'redux-form'
import * as styles from './AddTodo.module.scss'

let AddTodoForm = ({ handleSubmit }) => {
    return (
        <form className={styles.add_todo_form} onSubmit={ handleSubmit }>
            <Field component="input" typr="text" name="name" className={styles.add_todo_input} placeholder="Введите название задачи"/>
            <button type="submit" className={styles.add_todo_button}>Добавить задачу</button>
        </form>
    )
}

AddTodoForm = reduxForm({ form: 'add-todo' })(AddTodoForm)

export default AddTodoForm