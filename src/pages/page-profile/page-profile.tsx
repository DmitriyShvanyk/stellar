import { FC, ReactChildren, ReactChild } from 'react'
import { Menu } from '../../components/menu/menu'
import styles from './page-profile.module.css'

interface IPageProfile {
    children: ReactChild | ReactChildren;
}

export const PageProfile: FC<IPageProfile> = ({ children }) => {
    return (
        <div className={`${styles.pageProfile}`}>
            <div className={styles.container}>
                <div className={`${styles.left} hidden md:block`}>
                    <Menu />
                </div>
                {children}
            </div>
        </div>
    )
}