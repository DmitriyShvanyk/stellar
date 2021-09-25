import { FC } from 'react'
import styles from './title.module.css'

interface ITitle {
    text?: string
}

export const Title: FC<ITitle> = ({ text }) => {
    return (
        <h1 className={`${styles.title} text text_type_main-large mt-5 mb-5`}>
            {text}
        </h1>
    )
}