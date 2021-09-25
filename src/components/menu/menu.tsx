import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from '../../services/hooks'
import { logoutUserRequest } from '../../services/actions/user'
import { Spinner } from '../spinner/spinner'
import styles from './menu.module.css'

export const Menu: FC = () => {
    const dispatch = useDispatch()
    const  { isLoading, isLogout } = useSelector(state => state.user)
    
    const clickLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        dispatch(logoutUserRequest())
    }

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
                <a href="#" className={styles.menu__link} onClick={clickLogout}>
                    Выход {isLoading && isLogout ? <Spinner /> : null}
                </a>
            </li>
        </ul>
    )
}