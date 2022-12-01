import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './page404.module.css'

import { useTranslation } from "react-i18next"

export const Page404: FC = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.page404}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    { t('page404Title') }
                    <span className={styles.num}>404</span>
                </h1>
                <p className={styles.text}>{ t('page404Text') }</p>
                <Link to='/' className={styles.link}>{ t('page404Link') }</Link>
            </div>
        </div>
    )
}