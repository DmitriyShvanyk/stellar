import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../OrderDetails/OrderDetails'
import Modal from '../Modal/Modal'
import styles from './burgerConstructor.module.css'


const BurgerConstructor = ({ data }) => {
    const [openModal, setOpenModal] = useState(false)
    const closeModal = () => setOpenModal(false)
    const totalPrice = data.reduce((a, b) => a + b.price, 0)

    return (
        <section className={`${styles.burgerConstructor}`}>
            {
                <div className={`${styles.burgerConstructor__inner}`}>
                    <div className={`${styles.burgerConstructor__head}`}>
                        {data.map((data, index) => {

                            if (data.type === 'bun' && data._id === '60b4022a4987990027701133') {
                                return (
                                    <div className={`${styles.burgerConstructor__item}`} key={data._id}>
                                        <button className={`${styles.burgerConstructor__drag}`}></button>
                                        <ConstructorElement
                                            type="top"
                                            isLocked={true}
                                            text={`${data.name} (вверх)`}
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

                            if (data.type !== 'bun' && data._id !== '60b4022a4987990027701133') {
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

                            if (data.type === 'bun' && data._id === '60b4022a4987990027701133') {
                                return (
                                    <div className={`${styles.burgerConstructor__item}`} key={data._id}>
                                        <button className={`${styles.burgerConstructor__drag}`}></button>
                                        <ConstructorElement
                                            type="bottom"
                                            isLocked={true}
                                            text={`${data.name} (низ)`}
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
                    <Button type="primary" size="medium" onClick={setOpenModal}>
                        Оформить заказ
                    </Button>
                </div>
            </div>            
            {setOpenModal ?
                (<Modal showModal={openModal} handleClose={closeModal}>
                    <OrderDetails />
                </Modal>) :
                null
                }
        </section>
    )
}

BurgerConstructor.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.array,
    price: PropTypes.number,
};

export default BurgerConstructor;