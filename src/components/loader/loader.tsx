import { FC } from 'react'
import styles from './loader.module.css'

export const Loader: FC = () => {
    return (
        <div className={`${styles.loader} rounded-full w-10 h-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
    )
}