import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './dropdown.module.css'

const Dropdown = ({ newClasses, children }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)
    const classDropdownToggle = isDropdownOpen ? `${styles.dropdown} ${styles.dropdownActive}` : `${styles.dropdown}`

    return (
        <div className={`${classDropdownToggle} ${newClasses}`} onClick={toggleDropdown}>
            {children}
            <div className={`${styles.dropdown__inner}`}>
                <ul className={styles.dropdown__list}>
                    <li className={styles.dropdown__item}>
                        <a href="#" className={styles.dropdown__link}>Профиль</a>
                    </li>
                    <li className={styles.dropdown__item}>
                        <a href="#" className={styles.dropdown__link}>История заказов</a>
                    </li>
                    <li className={styles.dropdown__item}>
                        <a href="#" className={styles.dropdown__link}>Выход</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    isDropdownOpen: PropTypes.bool,
    toggleDropdown: PropTypes.func,
}

export default Dropdown