import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, BurgerIcon, ListIcon, ProfileIcon, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { MenuIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/menu-icon'
import { ArrowDownIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/arrow-down-icon'
import Dropdown from '../dropdown/dropdown'
import { Logo } from '../logo/logo'
import styles from './app-header.module.css'

const AppHeader = () => {
    const [openCollapse, setOpenCollapse] = useState(false)
    const closeCollapse = () => setOpenCollapse(prev => !prev)
    const classCollapse = openCollapse ? `${styles.appHeader__collapse} ${styles.appHeader__collapseActive}` : `${styles.appHeader__collapse}`
    const { isLoginRequest, isRegisterSuccess, user } = useSelector((state) => state.user);

    console.log(isLoginRequest, isRegisterSuccess, user)

    return (
        <header className={styles.appHeader}>
            <div className={`${styles.appHeader__container} pt-4 pb-4 pl-5 pr-5`}>
                <div className={styles.appHeader__logo}>
                    <Logo />
                </div>
                <div className={classCollapse}>
                    <div className={styles.appHeader__menu}>
                        <div className={styles.appHeader__head}>
                            <h2 className={`${styles.appHeader__title} text`}>Меню</h2>
                            <button className={styles.appHeader__close} onClick={closeCollapse}>
                                <CloseIcon type="secondary" />
                            </button>
                        </div>
                        <div className={styles.appHeader__body}>
                            <NavLink exact={true} className='nav-link' activeClassName='nav-link--active' to='/'>
                                <BurgerIcon type="secondary" />
                                <span className="ml-2">Конструктор <span className={styles.appHeader__btnTextBurgers}>бургеров</span></span>
                            </NavLink>
                            <NavLink exact={true} className='nav-link' activeClassName='nav-link--active' to='/feed'>
                                <ListIcon type="secondary" />
                                <span className="ml-2">Лента заказов</span>
                            </NavLink>
                            {
                                (!isLoginRequest) ?
                                    (<NavLink exact={true} className={`${styles.appHeader__btn} ${styles.appHeader__btnProfile} nav-link`} to='/login'>
                                        <ListIcon type="secondary" />
                                        <span className="ml-2">Войти</span>
                                    </NavLink>) :
                                    (<Dropdown newClasses={`${styles.appHeader__btn} ${styles.appHeader__btnProfile}`}>
                                        <Button type="secondary" size="medium">
                                            <ProfileIcon type="secondary" />
                                            <span className="ml-2">Личный кабинет</span>
                                            <ArrowDownIcon type="secondary" />
                                        </Button>
                                    </Dropdown>)
                            }
                        </div>
                    </div>
                </div>
                <button className={styles.appHeader__hamburger} onClick={setOpenCollapse}>
                    <MenuIcon type="secondary" />
                </button>
            </div>
        </header>
    )
}

export default AppHeader;