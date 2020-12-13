import React from 'react'

import * as styles from './Spinner.module.scss'
import spinner from '../../assets/img/spinner.svg'

const Spinner = () => {
    return <img src={spinner} className={styles.spinner} alt="spinner" />
}

export default Spinner
