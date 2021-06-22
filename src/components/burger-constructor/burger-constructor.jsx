import React, { useState, useEffect, useContext } from 'react'
import { ConstructorElement, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../order-details/order-details'
import TotalPrice from '../total-price/total-price'
import Modal from '../modal/modal'
import Loader from '../loader/loader'
import Error from '../error/error'
import styles from './burger-constructor.module.css'
import { API_LINK_ORDERS } from '../../services/api.js'
import { DataContext } from '../../services/context.js';


const BurgerConstructor = () => {
    const { data, setData } = useContext(DataContext)
    const [openModal, setOpenModal] = useState(false)
    const closeModal = () => setOpenModal(false)

    const [order, setOrder] = useState(null)

    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const bun = data && data.find(item => item.type === 'bun')
    const ingredients = data && data.filter(item => item.type !== 'bun').slice(randomIntFromInterval(0, 10))
    const dataID = ingredients.map(item => item._id)
    const totalPrice = ingredients.reduce((acc, val) => acc += val.price, 0) + bun.price * 2        
    //console.log(dataID)

    const getOrder = () => {
        setLoading(true)

        fetch(API_LINK_ORDERS, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "ingredients": dataID
            })
        })
            .then((response) => {
                if (response.ok) {
                    console.log(response.ok)
                    return response.json()
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then(data => {
                if(data && !data.success){
                    setLoaded(true)
                    setLoading(false)
                    setOrder(data.order.number)
                }
            })
            .catch(() => {
                setHasError(true)
                setLoaded(false)
            })
            .finally(() => {
                setLoading(false)
            });
    };

    const makeOrder = () => {              
        getOrder() 
        setOpenModal(true);
        dataID.push(bun._id)          
    }        

    return (
        <>
            { <section className={`${styles.burgerConstructor}`}>
                {
                    <div className={`${styles.burgerConstructor__inner}`}>
                        <div className={`${styles.burgerConstructor__head}`}>
                            <div className={`${styles.burgerConstructor__item}`} key={bun._id}>
                                <button className={`${styles.burgerConstructor__drag}`}></button>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${bun.name} (вверх)`}
                                    price={bun.price}
                                    thumbnail={bun.image}
                                />
                            </div>
                        </div>
                        <div className={`${styles.burgerConstructor__body}  scrollbar-vertical`}>
                            {(ingredients.length > 0 ?
                                <>
                                    {ingredients.map((item, index) => {
                                        return (
                                            <div className={`${styles.burgerConstructor__item}`}
                                                key={item._id}
                                            >
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
                                    })}
                                </> : <div className={styles.burgerConstructor__add}>Add ingredients</div>
                            )}
                        </div>
                        <div className={`${styles.burgerConstructor__foot}`}>
                            <div className={`${styles.burgerConstructor__item}`} key={bun._id}>
                                <button className={`${styles.burgerConstructor__drag}`}></button>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${bun.name} (низ)`}
                                    price={bun.price}
                                    thumbnail={bun.image}
                                />
                            </div>
                        </div>
                    </div>
                }
                <div className={`${styles.burgerConstructor__bottom} pt-10 pb-10`}>
                    <div className={`${styles.burgerConstructor__total} mr-10`}>
                        <TotalPrice totalPrice={totalPrice} />
                    </div>
                    <div className={styles.burgerConstructor__order}>
                        <Button type="primary" size="medium" onClick={makeOrder}>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
                <>
                    {openModal &&
                        (<Modal handleClose={closeModal}>
                            {hasError && !loading && !loaded && (<Error />)}
                            {loading && !hasError && !loaded && (<Loader />)}
                            {loaded && !hasError && !loading && 
                            (<OrderDetails order={order} />)}                       
                        </Modal>)}
                </>
            </section>
            }
        </>

    )
}

export default BurgerConstructor;