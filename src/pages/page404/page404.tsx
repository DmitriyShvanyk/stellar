import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './page404.module.css'

export const Page404: FC = () => {
    return (
        <div className={styles.page404}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Добро пожаловать на&nbsp;страницу
                    <span className={styles.num}>404</span>
                </h1>
                <p className={styles.text}>
                    Вы находитесь здесь, потому что ввели адрес страницы,
                    которая уже не существует или была перемещена по другому адресу
                </p>
                <Link to='/' className={styles.link}>Перейти на главную страницу</Link>
            </div>
        </div>
    )
}