import { FC } from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './total-price.module.css'

interface ITotalPrice {
    totalPrice: number
}

export const TotalPrice: FC<ITotalPrice> = ({ totalPrice }) => {
    return (
        <div className={`${styles.totalPrice} flex items-center`}>
            <p className={`${styles.totalPrice__block} text text_type_digits-medium pr-2`}>
                <span className={`${styles.totalPrice__value}`}>
                    {totalPrice}
                </span>
            </p>
            <CurrencyIcon type="secondary" />
        </div>
    )
}