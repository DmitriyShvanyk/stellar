import { useState, FC, ReactChildren, ReactChild } from 'react'
import { Menu } from '../menu/menu'
import styles from './dropdown.module.css'

interface IDropdown {
    newClasses: string;
    children: ReactChild | ReactChildren;
}

export const Dropdown: FC<IDropdown> = ({ newClasses, children }) => {
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