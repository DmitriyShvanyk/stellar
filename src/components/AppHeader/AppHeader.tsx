import React from 'react'
import { Button, Logo, BurgerIcon, ListIcon, ProfileIcon, EditIcon, CloseIcon, CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { MenuIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/menu-icon'
import { ArrowDownIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/arrow-down-icon'
import logoMobile from './../../images/logo-mobile.svg'
import './appHeader.css'


class AppHeader extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            open: false
        };
    }

    openHeaderCollapse = () => {
        this.setState({
            open: true
        })
    }

    closeHeaderCollapse = () => {
        this.setState({
            open: false
        })
    }

    render() {
        const classCollapse = this.state.open ? 'header__collapse header__collapse--active' : 'header__collapse';

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
                                <button className="header__menu-close" onClick={this.closeHeaderCollapse}>
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
                                <div className="header__btn header__btn--profile">
                                    <Button type="secondary" size="medium">
                                        <ProfileIcon type="secondary" />
                                        <span className="ml-2">Личный кабинет</span>
                                        <ArrowDownIcon type="secondary" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="header__hamburger" onClick={this.openHeaderCollapse}>
                        <MenuIcon type="secondary" />
                    </button>
                </div>
            </header>
        )
    }
}

export default AppHeader;