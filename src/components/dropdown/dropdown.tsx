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
        <div className={`${classDropdownToggle} ${newClasses} relative`} onClick={toggleDropdown}>
            {children}
            <div className={`${styles.dropdown__inner} overflow-hidden md:overflow-visible text-left py-0 md:py-2.5 relative top-0 md:top-full left-0 md:absolute md:rounded-sm md:pointer-events-none md:opacity-0`}>
                <Menu />
            </div>
        </div>
    )
}