import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserRequest } from '../../services/actions/user'

import styles from './menu.module.css'

const Menu = () => {
    const dispatch = useDispatch();
    const  { isLogoutRequest, isLogoutSuccess } = useSelector((state) => state.user);
    
    const clickLogout = (e) => {
        e.preventDefault();
        dispatch(logoutUserRequest());
    };

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
                {isLogoutSuccess ? 
                (<span className={styles.menu__link}>Выход...</span>) : 
                (<a href="#" className={styles.menu__link} onClick={clickLogout}>Выход</a>)}                
            </li>
        </ul>
    )
}

export default Menu