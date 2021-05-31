import React from 'react'
import styles from './main.module.css'

const Main = ({ children }) => {
    return (
        <main className={styles.main}>
            <section className={`container ${styles.main__container} pt-5`}>
                {children}
            </section>
        </main>
    )
}

export default Main