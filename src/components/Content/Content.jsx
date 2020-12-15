import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as styles from './Content.module.scss'
import MenuItems from '../TodoItems/TodoItems'
import AddTodo from '../AddTodo/AddTodo'


const Content = () => {
    return (
        <div className={styles.content}>
            <AddTodo />
            <Switch>
                <Route path="/:path" component={MenuItems} />
            </Switch>
        </div>
    )
}

export default Content
