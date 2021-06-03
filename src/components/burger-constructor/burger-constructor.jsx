import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import styles from './burger-constructor.module.css'


const BurgerConstructor = ({ data }) => {
    const [openModal, setOpenModal] = useState(false)
    const closeModal = () => setOpenModal(false)
    const totalPrice = data.reduce((acc, val) => acc + val.price, 0)    

    return (
        <section className={`${styles.burgerConstructor}`}>
            {
                <div className={`${styles.burgerConstructor__inner}`}>
                    <div className={`${styles.burgerConstructor__head}`}>                        
                        {data.map((item, index) => {
                            if (item.type === 'bun' && index === 0) {
                                return (
                                    <div className={`${styles.burgerConstructor__item}`} key={item._id}>
                                        <button className={`${styles.burgerConstructor__drag}`}>
                                            <DragIcon type="secondary" />
                                        </button>
                                        <ConstructorElement
                                            type="top"
                                            isLocked={true}
                                            text={`${item.name} (вверх)`}
                                            price={item.price}
                                            thumbnail={item.image}
                                        />
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className={`${styles.burgerConstructor__body}  scrollbar-vertical`}>
                        {data.map((item, index) => {
                            if (item.type !== 'bun') {
                                return (
                                    <div className={`${styles.burgerConstructor__item}`} key={item._id}>
                                        <button className={`${styles.burgerConstructor__drag}`}>
                                            <DragIcon type="secondary" />
                                        </button>
                                        <ConstructorElement
                                            isLocked={false}
                                            text={item.name}
                                            price={item.price}
                                            thumbnail={item.image}
                                        />
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className={`${styles.burgerConstructor__foot}`}>
                        {data.map((item, index) => {
                            if (item.type === 'bun' && index === 0) {
                                return (
                                    <div className={`${styles.burgerConstructor__item}`} key={item._id}>
                                        <button className={`${styles.burgerConstructor__drag}`}>
                                            <DragIcon type="secondary" />
                                        </button>
                                        <ConstructorElement
                                            type="bottom"
                                            isLocked={true}
                                            text={`${item.name} (низ)`}
                                            price={item.price}
                                            thumbnail={item.image}
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
            {openModal &&
                (<Modal handleClose={closeModal}>
                    <OrderDetails />
                </Modal>)
            }
        </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.array
};

export default BurgerConstructor;