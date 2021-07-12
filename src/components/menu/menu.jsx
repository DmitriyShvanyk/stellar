import { NavLink } from 'react-router-dom'
import styles from './menu.module.css'

const Menu = () => {
    return (
        <ul className={styles.menu}>
            <li className={styles.menu__item}>
                <NavLink exact={true} className={styles.menu__link} activeClassName={styles.menu__linkActive} to='/profile'>
                    Профиль
                </NavLink>
            </li>
            <li className={styles.menu__item}>
                <NavLink exact={true} className={styles.menu__link} activeClassName={styles.menu__linkActive} to='/profile/orders'>
                    История заказов
                </NavLink>
            </li>
            <li className={styles.menu__item}>
                <a href="#" className={styles.menu__link}>Выход</a>
            </li>
        </ul>
    )
}

export default Menu