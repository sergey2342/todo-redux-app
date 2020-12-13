import React from 'react'

import Menu from '../Menu/Menu'
import Content from '../Content/Content'
import * as styles from './App.module.scss'


const App = () => {
    return (
        <div className={styles.app}>    
            <Menu />
            <Content />
        </div>
    );
}

export default App
