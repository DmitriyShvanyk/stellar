import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import styles from './burgerIngredient.module.css'


const BurgerIngredient = ({ data }) => {
    const [openModal, setOpenModal] = useState(false)
    const closeModal = () => setOpenModal(false)
    const [count, setCount] = useState(0);

    const handleOpenModal = (e) => {
        setOpenModal(e);
        setCount(count + 1); // example count
    }

    return (
        <>
            <div className={`${styles.burgerIngredient} mb-6`}>
                <a href="#" className={styles.burgerIngredient__item} onClick={handleOpenModal}>
                    <div className={styles.burgerIngredient__pict}>
                        {count > 0 ? (<Counter count={count} size="default" />) : null}
                        <img className={styles.burgerIngredient__img} loading="lazy" src={data.image} alt={data.name} />
                    </div>
                    <div className={styles.burgerIngredient__content}>
                        <div className={`${styles.burgerIngredient__price} text text_type_main-medium mb-2`}>
                            <span className={`${styles.burgerIngredient__value} mr-3`}>{data.price}</span>
                            <CurrencyIcon type="secondary" />
                        </div>
                        <div className={`${styles.burgerIngredient__name} text`}>{data.name}</div>
                    </div>
                    <span className={styles.burgerIngredient__add}>Добавить</span>
                </a>
            </div>
            {setOpenModal ?
                (<Modal modalHeader="Детали ингредиента" showModal={openModal} handleClose={closeModal}>
                    {<IngredientDetails {...data} />}
                </Modal>) :
                null
            }
        </>
    )
}

BurgerIngredient.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
};

export default BurgerIngredient;