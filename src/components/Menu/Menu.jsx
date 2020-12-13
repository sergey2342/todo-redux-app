import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as styles from './Menu.module.scss'
import { allTodos, completeAll } from '../../assets/icons'
import { getTodos } from '../../services/api'

function MenuListItem({label, icon, to, activeOnlyWhenExact }) {
    const match = useRouteMatch({ path: to, exact: activeOnlyWhenExact });

    return <Link to={to} className={`${styles.menu_item} ${match ? `${styles.active}` : ''}`}>{icon} {label}</Link>
}

const Menu = () => {
    const dispatch = useDispatch()


    return (
        <div className={styles.menu}>
            <div className={styles.menu_logo}>Todo App</div>
            <ul className={styles.menu_list}>
                <MenuListItem to="/all" icon={allTodos} label="Все задачи" activeOnlyWhenExact={true} />
                <MenuListItem to="/complete" icon={completeAll} label="Выполненные" />
            </ul>
            <button 
                type="button" 
                className={styles.menu_load}
                onClick={() => getTodos(dispatch)}
            >Загрузить задачи</button>
        </div>
    )
}

export default Menu
