import React, { useState, FC } from 'react'
import { useSelector } from '../../services/hooks'
import { NavLink } from 'react-router-dom'
import { Button, BurgerIcon, ListIcon, ProfileIcon, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { MenuIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/menu-icon'
import { ArrowDownIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/arrow-down-icon'
import { Dropdown } from '../dropdown/dropdown'
import { Logo } from '../logo/logo'
import styles from './app-header.module.css'

import "./../../translations/i18n"
import { useTranslation } from "react-i18next"

export const AppHeader: FC = () => {
    const [openCollapse, setOpenCollapse] = useState<boolean>(false)
    const closeCollapse = () => setOpenCollapse(prev => !prev)
    const classCollapse = openCollapse ? `${styles.appHeader__collapse} ${styles.appHeader__collapseActive}` : `${styles.appHeader__collapse}`
    const { user, isLoggined } = useSelector(state => state.user)

    const [language, setLanguage] = useState('en')
    const { t, i18n } = useTranslation()

    const changeLang = (e: any) =>{
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    }

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
            <div className={`${styles.appHeader__container} grid grid-cols-2 items-center relative w-full p-4 py-1 md:py-4 lg:px-5 lg:grid-cols-3 lg:gap-x-1`}>
                <div className={`${classCollapse} fixed top-0 left-0 ml-0 hidden min-h-screen w-full lg:block lg:w-auto lg:relative lg:min-h-0`}>
                    <div className={styles.appHeader__menu}>
                        <div className={`${styles.appHeader__head} flex items-center justify-between px-5 lg:hidden`}>
                            <h2 className={`${styles.appHeader__title} text`}>Меню</h2>
                            <button className={`${styles.appHeader__close} p-0 border-0 bg-transparent outline-none`} onClick={closeCollapse}>
                                <CloseIcon type="secondary" />
                            </button>
                        </div>
                        <div className={`${styles.appHeader__body} flex flex-wrap lg:flex-nowrap`}>
                            <NavLink exact={true} className='nav-link flex items-center no-underline px-3 py-3 md:px-4 lg:py-5 w-full lg:w-auto lg:whitespace-nowrap' activeClassName='nav-link--active' to='/'>
                                <BurgerIcon type="secondary" />
                                <span className="ml-2">
                                    { t('headerLinkConstructorBurgers') }
                                </span>
                            </NavLink>
                            <NavLink exact={true} className='nav-link flex items-center no-underline px-3 py-3 md:px-4 lg:py-5 w-full lg:w-auto lg:whitespace-nowrap' activeClassName='nav-link--active' to='/feed'>
                                <ListIcon type="secondary" />
                                <span className="ml-2">{ t('headerLinkOrderFeed') }</span>
                            </NavLink>
                            {
                                (!isLoggined) ?
                                    (<NavLink exact={true} className={`${styles.appHeader__btn} ${styles.appHeader__btnProfile} nav-link flex items-center no-underline px-3 py-3 md:px-4 lg:py-5 w-full lg:w-auto lg:hidden`} to='/login'>
                                        <ListIcon type="secondary" />
                                        <span className="ml-2">{ t('headerLinkLogin') }</span>
                                    </NavLink>) :
                                    (<Dropdown newClasses={`${styles.appHeader__btn} ${styles.appHeader__btnProfile} lg:hidden`}>
                                        <Button type="secondary" size="medium">
                                            <ProfileIcon type="secondary" />
                                            <span className="ml-2">
                                                <span>{ t('privateCabinet') }</span>
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
                <div className={`${styles.appHeader__logo} flex items-center relative lg:justify-center`}>
                    <Logo />
                </div>
                <div className="inline-flex items-center ml-auto">
                    <select className={`${styles.appHeader__langs} flex h-6 text-black`} onChange={changeLang}>
                        <option value={language} lang={language}>En</option>
                        <option value={language} lang={language}>Ru</option>
                    </select>
                    {
                        (!isLoggined) ?
                            (<NavLink exact={true} className={`${styles.appHeader__btn} ${styles.appHeader__btnProfile} nav-link hidden items-center no-underline px-3 py-3 md:px-4 lg:py-5 w-full lg:w-auto lg:flex`} to='/login'>
                                <ListIcon type="secondary" />
                                <span className="ml-2">{ t('login') }</span>
                            </NavLink>) :
                            (<Dropdown newClasses={`${styles.appHeader__btn} ${styles.appHeader__btnProfile} hidden lg:block`}>
                                <Button type="secondary" size="medium">
                                    <ProfileIcon type="secondary" />
                                    <span className="ml-2">
                                        <span>{ t('privateCabinet') }</span>
                                        <span className={`text-xs`}>
                                            {(user !== null || userData?.email !== null) ? (user?.email || userData?.email) : null}
                                        </span>
                                    </span>
                                    <ArrowDownIcon type="secondary" />
                                </Button>
                            </Dropdown>)
                    }
                    <button className={`${styles.appHeader__hamburger} p-0 border-0 bg-transparent outline-none flex items-center justify-center lg:hidden`} onClick={(e) => handleClick(e)}>
                        <MenuIcon type="secondary" />
                    </button>
                </div>
            </div>
        </header>
    )
}