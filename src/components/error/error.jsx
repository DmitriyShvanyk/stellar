import styles from './error.module.css'
import errorPict from './../../images/error-pict.jpg'

export const Error = () => {
    return (
        <div className={styles.error}>
            <h2 className={styles.error__title}>Ошибка</h2>
            <h3 className={styles.error__subtitle}>Увы, но эта страница где-то затерялась в галактике Интернета</h3>
            <img className={styles.error__img} src={errorPict} alt="Error" />
        </div>
    )
}