import React, { useContext } from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './total-price.module.css'
import { TotalCostContext } from '../../services/context.js';

const TotalPrice = ({totalPrice}) => {
    //const { totalCost, setTotalCost } = useContext(TotalCostContext);

    return (
        <div className={`${styles.totalPrice}`}>
            <p className={`${styles.totalPrice__block} text text_type_digits-medium pr-2`}>               
                <span className={`${styles.totalPrice__value}`}>
                    {totalPrice}
                </span>
            </p>
            <CurrencyIcon type="secondary" />
        </div>
    );
};

export default TotalPrice