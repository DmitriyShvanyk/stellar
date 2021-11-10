import { FC, ReactNode } from 'react'
import styles from './main.module.css'

interface IMain {
    children: ReactNode;
}

export const Main: FC<IMain> = ({ children }) => {
    return (
        <main className={`${styles.main} relative`}>
            <section className={`container ${styles.main__container} max-w-screen-xl pt-3 px-0 sm:px-2 md:pt-5 lg:px-5`}>
                {children}
            </section>
        </main>
    )
}