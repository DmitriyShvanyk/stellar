import { Link } from 'react-router-dom'
import { Logo as LogoComponent } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './logo.module.css'
import logoMobile from '../../images/logo-mobile.svg'

export const Logo = () => {
    return (
        <Link to='/' className={`logo ${styles.logo} inline-block align-top`}>
            <LogoComponent />
            <img className={`${styles.logo__mobile} hidden`} loading="lazy" src={logoMobile} alt="Stellar Burgers" />
        </Link>
    )
}