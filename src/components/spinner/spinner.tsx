import { FC } from 'react'
import styles from './spinner.module.css'

export const Spinner: FC = () => {
    return (
        <div className={`${styles.spinner} inline-block align-middle border-2 border-white border-t-transparent rounded-full w-5 h-5`}></div>
    )
}