import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from '../../services/hooks'
import { logoutUserRequest } from '../../services/actions/user'
import { Spinner } from '../spinner/spinner'
import styles from './menu.module.css'

import { useTranslation } from "react-i18next"

export const Menu: FC = () => {
    const dispatch = useDispatch()
    const { isLoading, isLogout } = useSelector(state => state.user)
    const { t } = useTranslation()

    const clickLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        dispatch(logoutUserRequest())
    }

    return (
        <ul className={`${styles.menu} pl-0 list-none m-0`}>
            <li className={styles.menu__item}>
                <NavLink exact={true} className={`${styles.menu__link} block px-4 py-1 no-underline hover:text-white`} activeClassName={styles.menu__linkActive} to='/profile'>
                    { t('menuProfile') }
                </NavLink>
            </li>
            <li className={styles.menu__item}>
                <NavLink exact={true} className={`${styles.menu__link} block px-4 py-1 no-underline hover:text-white`} activeClassName={styles.menu__linkActive} to='/profile/orders'>
                    { t('menuPurchaseHistory') }
                </NavLink>
            </li>
            <li className={styles.menu__item}>
                <a href="#" className={`${styles.menu__link} block px-4 py-1 no-underline hover:text-white`} onClick={clickLogout}>
                    { t('logout') } {isLoading && isLogout ? <Spinner /> : null}
                </a>
            </li>
        </ul>
    )
}