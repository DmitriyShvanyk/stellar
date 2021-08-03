import PropTypes from 'prop-types'
import styles from './main.module.css'


export const Main = ({ children }) => {
    return (
        <main className={styles.main}>
            <section className={`container ${styles.main__container} pt-5`}>
                {children}
            </section>
        </main>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
}