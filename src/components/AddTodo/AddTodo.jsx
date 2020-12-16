import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as styles from './AddTodo.module.scss'
import { addTodoThunk } from '../../redux/todosReducer'

const AddTodo = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const onAdd = value => {
        if(value) {
            dispatch(addTodoThunk(value))
        }

        setInputValue('')
    }

    return (
        <div className={styles.add_todo}>
            <div className={styles.add_todo_title}>Добавление задачи</div>
            <div className={styles.add_todo_form}>
                <input className={styles.add_todo_input} type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Введите название задачи"/>
                <button className={styles.add_todo_button} onClick={() => onAdd(inputValue)}>Добавить задачу</button>
            </div>
        </div>
    )
}

export default AddTodo
