import { Menu } from '../../components/menu/menu'
import styles from './page-profile.module.css'

export const PageProfile = ({ children }) => {
    return (
        <div className={`${styles.pageProfile}`}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Menu />
                </div>
                {children}
            </div>
        </div>
    );
};