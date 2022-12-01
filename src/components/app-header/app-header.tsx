import React, { useState, FC } from 'react'
import { useSelector } from '../../services/hooks'
import { NavLink } from 'react-router-dom'
import { Button, BurgerIcon, ListIcon, ProfileIcon, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { MenuIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/menu-icon'
import { ArrowDownIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/arrow-down-icon'
import { Dropdown } from '../dropdown/dropdown'
import { Logo } from '../logo/logo'
import styles from './app-header.module.css'

export const AppHeader: FC = () => {
    const [openCollapse, setOpenCollapse] = useState<boolean>(false)
    const closeCollapse = () => setOpenCollapse(prev => !prev)
    const classCollapse = openCollapse ? `${styles.appHeader__collapse} ${styles.appHeader__collapseActive}` : `${styles.appHeader__collapse}`
    const { user, isLoggined } = useSelector(state => state.user)

    let userData
    if (localStorage.getItem('userData') !== null ) {
        userData = JSON.parse(localStorage.getItem('userData') || "")
    }
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setOpenCollapse(prev => !prev)
    }

    return (
        <header className={`${styles.appHeader} sticky top-0 left-0`}>
            <div className={`${styles.appHeader__container} flex items-center relative w-full p-4 lg:px-5 lg:block`}>
                <div className={`${styles.appHeader__logo} flex items-center justify-center relative top-0 left-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2`}>
                    <Logo />
                </div>
                <div className={`${classCollapse} fixed top-0 left-0 ml-0 hidden min-h-screen w-full lg:block lg:ml-auto lg:w-auto lg:relative lg:min-h-0`}>
                    <div className={styles.appHeader__menu}>
                        <div className={`${styles.appHeader__head} flex items-center justify-between px-5 lg:hidden`}>
                            <h2 className={`${styles.appHeader__title} text`}>Меню</h2>
                            <button className={`${styles.appHeader__close} p-0 border-0 bg-transparent outline-none`} onClick={closeCollapse}>
                                <CloseIcon type="secondary" />
                            </button>
                        </div>
                        <div className={`${styles.appHeader__body} flex flex-wrap xl:flex-nowrap`}>
                            <NavLink exact={true} className='nav-link flex items-center no-underline px-3 py-3 md:px-4 lg:py-5 w-full lg:w-auto' activeClassName='nav-link--active' to='/'>
                                <BurgerIcon type="secondary" />
                                <span className="ml-2">
                                    Конструктор <span className={`inline lg:hidden`}>бургеров</span>
                                </span>
                            </NavLink>
                            <NavLink exact={true} className='nav-link flex items-center no-underline px-3 py-3 md:px-4 lg:py-5 w-full lg:w-auto' activeClassName='nav-link--active' to='/feed'>
                                <ListIcon type="secondary" />
                                <span className="ml-2">Лента заказов</span>
                            </NavLink>
                            {
                                (!isLoggined) ?
                                    (<NavLink exact={true} className={`${styles.appHeader__btn} ${styles.appHeader__btnProfile} nav-link flex items-center no-underline px-3 py-3 md:px-4 lg:py-5 w-full lg:w-auto`} to='/login'>
                                        <ListIcon type="secondary" />
                                        <span className="ml-2">Войти</span>
                                    </NavLink>) :
                                    (<Dropdown newClasses={`${styles.appHeader__btn} ${styles.appHeader__btnProfile}`}>
                                        <Button type="secondary" size="medium">
                                            <ProfileIcon type="secondary" />
                                            <span className="ml-2">
                                                <span>Личный кабинет</span>
                                                <span className={`text-xs`}>
                                                    {(user !== null || userData?.email !== null) ? (user?.email || userData?.email) : null}
                                                </span>
                                            </span>
                                            <ArrowDownIcon type="secondary" />
                                        </Button>
                                    </Dropdown>)
                            }
                        </div>
                    </div>
                </div>
                <button className={`${styles.appHeader__hamburger} p-0 border-0 bg-transparent outline-none flex items-center justify-center absolute top-0 right-0 lg:hidden`} onClick={(e) => handleClick(e)}>
                    <MenuIcon type="secondary" />
                </button>
            </div>
        </header>
    )
}