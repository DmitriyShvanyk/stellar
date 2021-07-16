import Menu from '../../components/menu/menu'
import styles from './profile.module.css'

export const Profile = ({ children }) => {
    return (
        <div className={`${styles.profile}`}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Menu />
                </div>
                {children}
            </div>
        </div>
    );
};