import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import styles from './burger-ingredient.module.css'

const BurgerIngredient = ({ item }) => {  
    const [openModal, setOpenModal] = useState(false)
    const [count, setCount] = useState(0);

    const closeModal = () => {
        setOpenModal(false)
    } 

    const handleOpenModal = (e) => {
        setOpenModal(e);
        setCount(count + 1); // example count
    }

    return (
        <>
            <div className={`${styles.burgerIngredient} mb-6`}>
                <a href="#" className={styles.burgerIngredient__item} onClick={handleOpenModal}>
                    <picture className={styles.burgerIngredient__pict}>
                        {count > 0 ? (<Counter count={count} size="default" />) : null}
                        <img className={styles.burgerIngredient__img} loading="lazy" src={item.image} alt={item.name} />
                    </picture>
                    <div className={styles.burgerIngredient__content}>
                        <div className={`${styles.burgerIngredient__price} text text_type_main-medium mb-2`}>
                            <span className={`${styles.burgerIngredient__value} mr-3`}>{item.price}</span>
                            <CurrencyIcon type="secondary" />
                        </div>
                        <div className={`${styles.burgerIngredient__name} text`}>{item.name}</div>
                    </div>
                    <span className={styles.burgerIngredient__add}>Добавить</span>
                </a>
            </div>
            {
                openModal &&
                (<Modal modalHeader="Детали ингредиента" handleClose={closeModal}>
                    {<IngredientDetails {...item} />}
                </Modal>)
            }
        </>
    )
}


BurgerIngredient.propTypes = {
    data: PropTypes.shape({
        __v: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    })
}

export default BurgerIngredient;