import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Srinner from '../Spinner/Spinner'
import { completeTodo } from '../../assets/icons'
import * as styles from './TodoItems.module.scss'
import { checkedTodoThunk } from '../../redux/todosReducer'


const MenuItems = () => {
    const { path } = useParams()

    const dispatch = useDispatch()
    let todos = useSelector(state => state.todos.todos)
    const loading = useSelector(state => state.todos.loading)
    const error = useSelector(state => state.todos.error)

    if(path === 'complete') {
        todos = todos.filter(item => item.completed)
    } 


    return (
        <>
            <div className={styles.todo_items_list}>
                {
                    loading
                    ? <Srinner />
                    : error && error.type === 'getTodos'
                        ? <div className={styles.todo_items_todo_alert}><span>{error.text}</span><span>{error.message}</span></div> 
                        : todos.length === 0 
                            ? <div className={styles.todo_items_todo_alert}><span>Нет задач</span></div> 
                            : todos.map(item => {
                                const { id, title, completed } = item

                                return (
                                    <div className={styles.todo_items_todo} key={id}>
                                        <div className={styles.todo_items_todo_checkbox}>
                                            <input id={id} type="checkbox" checked={completed ? true : false} onChange={() => dispatch(checkedTodoThunk(item))}/>
                                            <label htmlFor={id}>{completeTodo}</label>
                                        </div>
                                        <div className={styles.todo_items_todo_title}>{title}</div>
                                    </div>
                                )
                            })
                }
            </div>
        </>
    )
}

export default MenuItems
