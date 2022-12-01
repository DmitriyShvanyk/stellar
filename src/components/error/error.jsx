import styles from './error.module.css'
import errorPict from './../../images/error-pict.jpg'
import { useTranslation } from "react-i18next"

export const Error = () => {
    const { t } = useTranslation()

    return (
        <div className={`${styles.error} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center`}>
            <h2 className={`${styles.error__title} mt-0 mb-4`}>{ t('errorTitle') }</h2>
            <h3 className={`${styles.error__subtitle} mt-0 mb-8`}>{ t('errorText') }</h3>
            <img className={`${styles.error__img} block mx-auto max-h-44`} src={errorPict} alt="Error" />
        </div>
    )
}