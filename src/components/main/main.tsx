import { FC, ReactNode } from 'react'
import styles from './main.module.css'

interface IMain {
    children: ReactNode;
}

export const Main: FC<IMain> = ({ children }) => {
    return (
        <main className={styles.main}>
            <section className={`container ${styles.main__container} pt-5`}>
                {children}
            </section>
        </main>
    )
}