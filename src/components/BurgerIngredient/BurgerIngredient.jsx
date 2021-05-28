import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal.jsx'
import styles from './BurgerIngredient.module.css'
import IngredientInfo from '../IngredientInfo/IngredientInfo.jsx'


const BurgerIngredient = (data) => {    
    const [show, openModal] = useState(false)
    const closeModal = () => openModal(false)    

    return (
        <>
            <div className={`${styles.BurgerIngredient} mb-6`}>
                <a href="#" className={styles.BurgerIngredient__item} onClick={openModal}>
                    <div className={styles.BurgerIngredient__pict}>
                        {(data.__v !== 0 ? (<Counter count={data.__v} size="default" />) : null)}
                        <img className={styles.BurgerIngredient__img} loading="lazy" src={data.image} alt={data.name} />
                    </div>
                    <div className={styles.BurgerIngredient__content}>
                        <div className={`${styles.BurgerIngredient__price} text text_type_main-medium mb-2`}>
                            <span className={`${styles.BurgerIngredient__value} mr-3`}>{data.price}</span>
                            <CurrencyIcon type="secondary" />
                        </div>
                        <div className={`${styles.BurgerIngredient__name} text`}>{data.name}</div>
                    </div>
                    <span className={styles.BurgerIngredient__add}>Добавить</span>
                </a>
            </div>
            {openModal ? 
                (<Modal show={show} handleClose={closeModal}>     
                    <IngredientInfo {...data} />
                </Modal>) :
                null            
            }            
        </>
    )
}

BurgerIngredient.propTypes = {
    __v: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}; 

export default BurgerIngredient;