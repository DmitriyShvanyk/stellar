import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './total-price.module.css'

export const TotalPrice = ({ totalPrice }) => {
    return (
        <div className={`${styles.totalPrice}`}>
            <p className={`${styles.totalPrice__block} text text_type_digits-medium pr-2`}>
                <span className={`${styles.totalPrice__value}`}>
                    {totalPrice}
                </span>
            </p>
            <CurrencyIcon type="secondary" />
        </div>
    )
}