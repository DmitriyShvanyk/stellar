import { useEffect, useRef } from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
//import CountUp from 'react-countup'
import styles from './total-price.module.css'


function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

const TotalPrice = ({ totalPrice }) => {
    const prevTotalPrice = usePrevious(totalPrice);
    console.log(prevTotalPrice, totalPrice)

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