import React from 'react'
import styles from './error.module.css'
import errorPict from './../../images/error-pict.jpg'

const Error = () => {
    return (
        <div className={styles.error}>
            <h2 className={styles.error__title}>Error</h2>
            <h3 className={styles.error__subtitle}>Космические пришельцы съели все бургеры</h3>
            <img className={styles.error__img} src={errorPict} alt="Error" />
        </div>
    )
}

export default Error