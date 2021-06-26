import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'

import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../order-details/order-details'
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item'
import TotalPrice from '../total-price/total-price'
import Modal from '../modal/modal'
import Loader from '../loader/loader'
import Error from '../error/error'

import { addBun, addtem, resetState } from '../../services/actions/data';
import { openOrderModal, closeOrderModal } from '../../services/actions/modal-order'
import { getOrder, setOrderItems } from '../../services/actions/order'

import styles from './burger-constructor.module.css'


const BurgerConstructor = () => {
    const dispatch = useDispatch()
    const { items, bun } = useSelector((store) => store.data)
    const { isModalOrderOpened } = useSelector((store) => store.modalOrder);
    const { orderId, itemsId, hasError, isLoading } = useSelector((store) => store.order);

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

    const [{ isHover }, dropTarget] = useDrop({
        accept: 'item',
        collect: (monitor) => ({
            isHover: monitor.isOver(),
        }),
        drop(item) {
            handleDrop(item);
        },
    });

    const bgColor = isHover && 'rgba(0, 0, 0, .5)';


    const makeOrder = () => {
        dispatch(getOrder({
            ingredients: itemsId
        }));
        dispatch(openOrderModal());
    };

    const closeModal = () => {
        dispatch(closeOrderModal())
        dispatch(resetState());
    }

    return (
        <section className={`${styles.burgerConstructor}`}>
            <>
                <div className={`${styles.burgerConstructor__inner}`} style={{ bgColor }} ref={dropTarget}>
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
                        ) : (<div className={styles.burgerConstructor__preview} data-position="top">
                            Добавить булочку (вверх)
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
                            (<div className={styles.burgerConstructor__preview}>Добавить начинку</div>)
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
                        ) : (<div className={styles.burgerConstructor__preview} data-position="bottom">
                            Добавить булочку (низ)
                        </div>)}
                    </>
                    ) : (
                        (<div className={styles.burgerConstructor__previews}>
                            <div className={styles.burgerConstructor__preview}>
                                Добавить ингредиенты
                            </div>
                        </div>)
                    )}
                </div>

                <div className={`${styles.burgerConstructor__bottom} pt-10 pb-10`}>
                    <div className={`${styles.burgerConstructor__total} mr-10`}>
                        {<TotalPrice totalPrice={totalPrice} />}
                    </div>
                    <div className={styles.burgerConstructor__order} onClick={makeOrder}>
                        {(bun || items.length > 0) && (
                            <Button type="primary" size="medium">
                                Оформить заказ
                            </Button>
                        )}
                    </div>
                </div>

                {isModalOrderOpened &&
                    (<Modal handleClose={closeModal}>
                        {isLoading ? <Loader /> : (hasError ? <Error /> :
                            (<OrderDetails orderId={orderId} />)
                        )}
                    </Modal>)}
            </>
        </section>
    );    
}

export default BurgerConstructor;