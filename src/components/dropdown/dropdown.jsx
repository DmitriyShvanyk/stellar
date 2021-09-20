import { useState } from 'react'
import PropTypes from 'prop-types'
import { Menu } from '../menu/menu'
import styles from './dropdown.module.css'

export const Dropdown = ({ newClasses, children }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)
    const classDropdownToggle = isDropdownOpen ? `${styles.dropdown} ${styles.dropdownActive}` : `${styles.dropdown}`

    return (
        <div className={`${classDropdownToggle} ${newClasses}`} onClick={toggleDropdown}>
            {children}
            <div className={`${styles.dropdown__inner}`}>
                <Menu />
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    newClasses: PropTypes.string,
    children: PropTypes.element
}