import { FC } from 'react'
import styles from './title.module.css'

interface ITitle {
    text?: string
}

export const Title: FC<ITitle> = ({ text }) => {
    return (
        <h1 className={`${styles.title} text text_type_main-large mt-0 mb-2 md:my-5 text-center md:text-left`}>
            {text}
        </h1>
    )
}