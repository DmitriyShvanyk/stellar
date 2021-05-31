import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Logo, BurgerIcon, ListIcon, ProfileIcon, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { MenuIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/menu-icon'
import { ArrowDownIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/arrow-down-icon'
import logoMobile from './../../images/logo-mobile.svg'
import Dropdown from '../Dropdown/Dropdown'
import styles from './appHeader.module.css'


const AppHeader = () => {
    const [openCollapse, setOpenCollapse] = useState(false)
    const closeCollapse = () => setOpenCollapse(false)
    const classCollapse = openCollapse ? `${styles.appHeader__collapse} ${styles.appHeader__collapseActive}` : `${styles.appHeader__collapse}`

    return (
        <header className={styles.appHeader}>
            <div className={`${styles.appHeader__container} pt-4 pb-4 pl-5 pr-5`}>
                <a href="/" className={`logo ${styles.appHeader__logo}`}>
                    <Logo />
                    <img className={styles.appHeader__mobile} loading="lazy" src={logoMobile} alt="Stellar Burgers" />
                </a>
                <div className={classCollapse}>
                    <div className={styles.appHeader__menu}>
                        <div className={styles.appHeader__head}>
                            <h2 className={`${styles.appHeader__title} text`}>Меню</h2>
                            <button className={styles.appHeader__close} onClick={closeCollapse}>
                                <CloseIcon type="secondary" />
                            </button>
                        </div>
                        <div className={styles.appHeader__body}>
                            <div className={`${styles.appHeader__btn} ${styles.appHeader__btnConstructor}`}>
                                <Button type="secondary" size="medium">
                                    <BurgerIcon type="secondary" />
                                    <span className="ml-2">Конструктор <span className={styles.appHeader__btnTextBurgers}>бургеров</span></span>
                                </Button>
                            </div>
                            <div className={`${styles.appHeader__btn} ${styles.appHeader__btnList}`}>
                                <Button type="secondary" size="medium">
                                    <ListIcon type="secondary" />
                                    <span className="ml-2">Лента заказов</span>
                                </Button>
                            </div>
                            <Dropdown newClasses={`${styles.appHeader__btn} ${styles.appHeader__btnProfile}`}>
                                <Button type="secondary" size="medium">
                                    <ProfileIcon type="secondary" />
                                    <span className="ml-2">Личный кабинет</span>
                                    <ArrowDownIcon type="secondary" />
                                </Button>
                            </Dropdown>                            
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

AppHeader.propTypes = {
    openCollapse: PropTypes.bool,
    setOpenCollapse: PropTypes.func,
    closeCollapse: PropTypes.func
}

export default AppHeader;