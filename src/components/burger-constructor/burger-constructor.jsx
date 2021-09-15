import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { Link } from 'react-router-dom'
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { OrderDetails } from '../order-details/order-details'
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item'
import { TotalPrice } from '../total-price/total-price'
import { Modal } from '../modal/modal'
import { Loader } from '../loader/loader'
import { Error } from '../error/error'
import { Spinner } from '../spinner/spinner'

import { addBun, addtem, resetState } from '../../services/actions/data'
import { getOrder, setOrderItems } from '../../services/actions/order'
import { openOrderModal, closeOrderModal } from '../../services/actions/modal-order'

import styles from './burger-constructor.module.css'


export const BurgerConstructor = () => {
    const dispatch = useDispatch()
    const { items, bun } = useSelector((store) => store.data)
    const { orderId, itemsId, hasError, isLoading } = useSelector((store) => store.order)
    const { isModalOrderOpened } = useSelector((store) => store.modalOrder)
    const { isLoggined } = useSelector((state) => state.user)

    const totalPrice = useMemo(() => {
        const bunPrice = bun ? bun.price * 2 : 0;
        const itemsPrice = items ? items.reduce((acc, val) => acc + val.price, 0) : 0;
        return itemsPrice + bunPrice;
    }, [items, bun]);

    useEffect(() => {
        const order = items.map((item) => item._id);
        bun && order.push(bun._id);
        dispatch(setOrderItems(order));

    }, [dispatch, items, bun]);

    const handleDrop = (item) => {
        switch (item.type) {
            case 'bun':
                return dispatch(addBun(item))
            default:
                return dispatch(addtem(item))
        }
    };

    const [{ canDrop, isHover }, dropRef] = useDrop({
        accept: 'item',
        drop(item) {
            handleDrop(item);
        },
        collect: (monitor) => ({
            isHover: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })        
    });

    const isActive = canDrop && isHover;

    let backgroundColor = '#131316';

    if (isActive) {
        backgroundColor = '#0D0D2A';
    }
    else if (canDrop) {
        backgroundColor = '#333';
    }

    const setActiveText = (txt) => isActive ? 'Отпустите, чтобы добавить' : txt

    const makeOrder = () => {
        dispatch(getOrder({
            ingredients: itemsId
        }));
        dispatch(openOrderModal())
    }

    const closeModal = () => {
        dispatch(closeOrderModal())
        dispatch(resetState())
    }

    return (
        <section className={`${styles.burgerConstructor}`}>
            <div className={`${styles.burgerConstructor__inner}`} ref={dropRef}>
                {bun || items.length > 0 ? (
                    <>
                        {bun !== null ? bun && (
                            <div className={`${styles.burgerConstructor__head}`}>
                                <button className={`${styles.burgerConstructor__drag}`}></button>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${bun.name} (верх)`}
                                    thumbnail={bun.image}
                                    price={bun.price}
                                    draggable={false}
                                />
                            </div>
                        ) : (<div className={styles.burgerConstructor__preview}
                            data-position="top" style={{ backgroundColor }}>
                            {setActiveText('Добавить булочку (вверх)')}
                        </div>)}

                        {items.length ?
                            (<div className={`${styles.burgerConstructor__body} scrollbar-vertical`}>
                                {items.map((item, index) => {
                                    const { constructorItemId, name, image, price } = item;
                                    return (
                                        <BurgerConstructorItem
                                            key={index}
                                            id={constructorItemId}
                                            idx={index}
                                            text={name}
                                            thumbnail={image}
                                            price={price}
                                            draggable={true}
                                        />
                                    );
                                })}
                            </div>) :
                            (<div className={styles.burgerConstructor__preview} style={{ backgroundColor }}>
                                {setActiveText('Добавить начинку')}
                            </div>)
                        }

                        {bun !== null ? bun && (
                            <div className={`${styles.burgerConstructor__foot}`}>
                                <button className={`${styles.burgerConstructor__drag}`}></button>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${bun.name} (низ)`}
                                    thumbnail={bun.image}
                                    price={bun.price}
                                    draggable={false}
                                />
                            </div>
                        ) : (<div className={styles.burgerConstructor__preview} style={{ backgroundColor }} data-position="bottom">
                            {setActiveText('Добавить булочку (низ)')}
                        </div>)}
                    </>
                ) : (
                    (<div className={styles.burgerConstructor__previews}>
                        <div className={styles.burgerConstructor__preview} style={{ backgroundColor }}>
                            {setActiveText('Добавить ингредиенты')}
                        </div>
                    </div>)
                )}
            </div>

            <div className={`${styles.burgerConstructor__bottom} pt-10 pb-10`}>
                <div className={`${styles.burgerConstructor__total} mr-10`}>
                    {<TotalPrice totalPrice={totalPrice} />}
                </div>
                <div className={styles.burgerConstructor__order}>
                    {
                        isLoggined ?
                            (
                                (bun && items.length > 0) &&
                                <Button type="primary" size="medium" onClick={makeOrder}>
                                    Оформить заказ {isLoading ? <Spinner /> : null}
                                </Button>
                            ) :
                            (
                                (bun && items.length > 0) &&
                                <Link to='/login' className="form__link text text_type_main-medium pr-3" style={{ color: '#ffffff' }}>
                                    Войти {isLoading ? <Spinner /> : null}
                                </Link>
                            )
                    }
                </div>
            </div>

            {isModalOrderOpened &&
                (<Modal handleClose={closeModal}>
                    {isLoading ? <Loader /> : (hasError ? <Error /> :
                        (<OrderDetails orderId={orderId} />)
                    )}
                </Modal>)}
        </section>
    )
}