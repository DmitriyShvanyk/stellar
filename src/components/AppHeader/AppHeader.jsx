import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Logo, BurgerIcon, ListIcon, ProfileIcon, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { MenuIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/menu-icon'
import { ArrowDownIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/arrow-down-icon'
import logoMobile from './../../images/logo-mobile.svg'
import './appHeader.css'
import './../Dropdown/dropdown.css'


const AppHeader = () => {
    const [open, openHeaderCollapse] = useState(false)
    const closeHeaderCollapse = () => openHeaderCollapse(false)
    const classCollapse = open ? 'header__collapse header__collapse--active' : 'header__collapse'

    const [isDropdownOpen, setDropdownActive] = useState(false)
    const toggleDropdown = () => setDropdownActive(!isDropdownOpen)
    const classToggleDropdown = isDropdownOpen ? 'dropdown dropdown--active' : 'dropdown'

    return (
        <header className="header">
            <div className="header__container pt-4 pb-4 pl-5 pr-5">
                <a href="/" className="logo header__logo">
                    <Logo />
                    <img className="logo__img-mobile" loading="lazy" src={logoMobile} alt="Stellar Burgers" />
                </a>
                <div className={classCollapse}>
                    <div className="header__menu">
                        <div className="header__menu-head">
                            <h2 className="header__menu-title text">Меню</h2>
                            <button className="header__menu-close" onClick={closeHeaderCollapse}>
                                <CloseIcon type="secondary" />
                            </button>
                        </div>
                        <div className="header__menu-body">
                            <div className="header__btn header__btn--constructor">
                                <Button type="secondary" size="medium">
                                    <BurgerIcon type="secondary" />
                                    <span className="ml-2">Конструктор <span className="header__btn-text-burgers">бургеров</span></span>
                                </Button>
                            </div>
                            <div className="header__btn header__btn--list">
                                <Button type="secondary" size="medium">
                                    <ListIcon type="secondary" />
                                    <span className="ml-2">Лента заказов</span>
                                </Button>
                            </div>
                            <div className={`header__btn header__btn--profile ${classToggleDropdown}`} onClick={toggleDropdown}>                                
                                <Button type="secondary" size="medium">
                                    <ProfileIcon type="secondary" />
                                    <span className="ml-2">Личный кабинет</span>
                                    <ArrowDownIcon type="secondary" />
                                </Button>
                                <div className="dropdown__inner dropdown__inner--right">
                                    <ul className="dropdown__list">
                                        <li className="dropdown__item">
                                            <a href="#" className="dropdown__link">Профиль</a>
                                        </li>
                                        <li className="dropdown__item">
                                            <a href="#" className="dropdown__link">История заказов</a>
                                        </li>
                                        <li className="dropdown__item">
                                            <a href="#" className="dropdown__link">Выход</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="header__hamburger" onClick={openHeaderCollapse}>
                    <MenuIcon type="secondary" />
                </button>
            </div>
        </header>
    )
}

AppHeader.propTypes = {    
    open: PropTypes.bool.isRequired,
    openHeaderCollapse: PropTypes.func.isRequired,
    closeHeaderCollapse: PropTypes.func.isRequired
};

export default AppHeader;