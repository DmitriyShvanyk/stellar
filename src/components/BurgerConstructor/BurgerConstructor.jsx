import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import data from '../../utils/data'
import styles from './BurgerConstructor.module.css'
import Modal from '../Modal/Modal.jsx'
import Order from '../Order/Order.jsx'


const BurgerConstructor = () => {
    const [show, openModal] = useState(false)
    const closeModal = () => openModal(false)
    const totalPrice = data.reduce((a, b) => a + b.price, 0)

    return (
        <section className={`${styles.burgerConstructor}`}>
            {
                <div className={`${styles.burgerConstructor__inner}`}>
                    <div className={`${styles.burgerConstructor__head}`}>
                        {data.map((data, index) => {

                            if (data.type === 'bun' && data._id === '60666c42cc7b410027a1a9b1') {
                                return (
                                    <div className={`${styles.burgerConstructor__item}`} key={data._id}>
                                        <button className={`${styles.burgerConstructor__drag}`}></button>
                                        <ConstructorElement
                                            type="top"
                                            isLocked={true}
                                            text={data.name}
                                            price={data.price}
                                            thumbnail={data.image}
                                        />
                                    </div>
                                )
                            }

                        })}
                    </div>
                    <div className={`${styles.burgerConstructor__body}  scrollbar-vertical`}>
                        {data.map((data, index) => {

                            if (data.type !== 'bun' && data._id !== '60666c42cc7b410027a1a9b1') {
                                return (
                                    <div className={`${styles.burgerConstructor__item}`} key={data._id}>
                                        <button className={`${styles.burgerConstructor__drag}`}>
                                            <DragIcon type="secondary" />
                                        </button>
                                        <ConstructorElement
                                            isLocked={false}
                                            text={data.name}
                                            price={data.price}
                                            thumbnail={data.image}
                                        />
                                    </div>
                                )
                            }

                        })}
                    </div>
                    <div className={`${styles.burgerConstructor__foot}`}>
                        {data.map((data, index) => {

                            if (data.type === 'bun' && data._id === '60666c42cc7b410027a1a9b1') {
                                return (
                                    <div className={`${styles.burgerConstructor__item}`} key={data._id}>
                                        <button className={`${styles.burgerConstructor__drag}`}></button>
                                        <ConstructorElement
                                            type="bottom"
                                            isLocked={true}
                                            text={data.name}
                                            price={data.price}
                                            thumbnail={data.image}
                                        />
                                    </div>
                                )
                            }

                        })}
                    </div>
                </div>
            }
            <div className={`${styles.burgerConstructor__bottom} pt-10 pb-10`}>
                <div className={`${styles.burgerConstructor__total} mr-10`}>
                    <p className={`${styles.burgerConstructor__value} text text_type_digits-medium pr-2`}>{totalPrice}</p>
                    <CurrencyIcon type="secondary" />
                </div>
                <div className={styles.burgerConstructor__order}>
                    <Button type="primary" size="medium" onClick={openModal}>
                        Оформить заказ
                    </Button>
                    {openModal ? 
                        (<Modal show={show} handleClose={closeModal}>     
                            <Order />
                        </Modal>) :
                        null            
                    }       
                </div>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default BurgerConstructor;