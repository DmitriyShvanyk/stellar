import { FC, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from '../../services/hooks'
import { useDrop } from 'react-dnd'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { OrderDetails } from '../order-details/order-details'
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item'
import { TotalPrice } from '../total-price/total-price'
import { Modal } from '../modal/modal'
import { Error } from '../error/error'
import { Spinner } from '../spinner/spinner'
import { addBun, addtem, resetState } from '../../services/actions/data'
import { getOrderNumber, setOrderItems } from '../../services/actions/order-number'
import { openOrderModal, closeOrderModal } from '../../services/actions/modal-order'
import { TItem } from '../../services/types/data'
import styles from './burger-constructor.module.css'

import { useTranslation } from "react-i18next"


export const BurgerConstructor: FC = () => {
    const dispatch = useDispatch()
    const { items, bun, hasError } = useSelector(state => state.data)
    const { orderId, itemsId, isLoading } = useSelector(state => state.orderNumber)
    const { isModalOrderOpened } = useSelector(state => state.modalOrder)
    const { isLoggined } = useSelector(state => state.user)
    const history = useHistory()
    const { t } = useTranslation()

    const totalPrice = useMemo(() => {
        const bunPrice = bun ? bun.price * 2 : 0;
        const itemsPrice = items ? items.reduce((acc: number, val: TItem) => acc + val.price, 0) : 0;
        return itemsPrice + bunPrice;
    }, [items, bun]);

    useEffect(() => {
        const order = items.map(item => item._id);
        bun && order.push(bun._id);
        dispatch(setOrderItems(order));

    }, [dispatch, items, bun]);

    const handleDrop = (item: TItem) => {
        switch (item.type) {
            case 'bun':
                return dispatch(addBun(item))
            default:
                return dispatch(addtem(item))
        }
    };

    const [{ canDrop, isHover }, dropRef] = useDrop({
        accept: 'item',
        drop(item: TItem) {
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

    const setActiveText = (txt: string) => isActive ? `${t('releaseToAdd')}` : txt

    const payload = {
        ingredients: itemsId
    }

    const makeOrder = () => {
        isLoggined ? dispatch(getOrderNumber(payload)) : history.replace('/login');
        dispatch(openOrderModal())
    }

    const closeModal = () => {
        dispatch(closeOrderModal())
        dispatch(resetState())
    }

    const showSpinner = isLoading ? <Spinner /> : null

    return (
        <section className={`${styles.burgerConstructor} relative hidden lg:block`}>
            <div className={`${styles.burgerConstructor__inner} flex flex-col pl-0`} ref={dropRef}>
                {bun || items?.length > 0 ? (
                    <>
                        {bun !== null ? bun && (
                            <div className={`${styles.burgerConstructor__head} relative mb-4`}>
                                <button className={`${styles.burgerConstructor__drag} opacity-0 pointer-events-none`}></button>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${bun.name} (верх)`}
                                    thumbnail={bun.image}
                                    price={bun.price}
                                />
                            </div>
                        ) : (<div className={`${styles.burgerConstructor__preview} inline-flex items-center justify-center w-full py-4 px-6 mb-4 ml-8`}
                            data-position="top" style={{ backgroundColor }}>
                            {setActiveText(`${t('addBunUp')}`)}
                        </div>)}

                        {items.length ?
                            (<div className={`${styles.burgerConstructor__body} pr-3 scrollbar-vertical`}>
                                {items.map((item, index) => {
                                    const { constructorItemId, name, image, price } = item
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
                            (<div className={`${styles.burgerConstructor__preview} inline-flex items-center justify-center w-full py-4 px-6 mb-4 ml-8`} style={{ backgroundColor }}>
                                {setActiveText(`${t('addStuffing')}`)}
                            </div>)
                        }

                        {bun !== null ? bun && (
                            <div className={`${styles.burgerConstructor__foot}`}>
                                <button className={`${styles.burgerConstructor__drag} opacity-0 pointer-events-none`}></button>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${bun.name} (низ)`}
                                    thumbnail={bun.image}
                                    price={bun.price}
                                />
                            </div>
                        ) : (<div className={`${styles.burgerConstructor__preview} inline-flex items-center justify-center w-full py-4 px-6 mb-4 ml-8`} style={{ backgroundColor }} data-position="bottom">
                            {setActiveText(`${t('addBunDown')}`)}
                        </div>)}
                    </>
                ) : (
                    (<div className={`${styles.burgerConstructor__previews} w-full mt-12`}>
                        <div className={`${styles.burgerConstructor__preview} inline-flex items-center justify-center w-full py-4 px-6 mb-4 ml-8`} style={{ backgroundColor }}>
                            {setActiveText(`${t('addIngredients')}`)}
                        </div>
                    </div>)
                )}
            </div>

            <div className={`${styles.burgerConstructor__bottom} flex items-center justify-end pt-10 pb-10`}>
                <div className={`${styles.burgerConstructor__total} mr-10`}>
                    {<TotalPrice totalPrice={totalPrice} />}
                </div>
                <div className={styles.burgerConstructor__order}>
                    {
                        isLoggined ?
                            (
                                (bun && items.length > 0) &&
                                <Button type="primary" size="medium" onClick={makeOrder}>
                                    { t('orderCheckout') } {showSpinner}
                                </Button>
                            ) :
                            (
                                (bun && items.length > 0) &&
                                <Link to='/login' className="form__link text text_type_main-medium pr-3" style={{ color: '#ffffff' }}>
                                    { t('login') } {showSpinner}
                                </Link>
                            )
                    }
                </div>
            </div>

            {isModalOrderOpened &&
                (<Modal handleClose={closeModal}>
                    {isLoading ? (<h2>{ t('orderCheckout2') } <Spinner /></h2>) : (hasError ? <Error /> :
                        (<OrderDetails orderId={orderId} />)
                    )}
                </Modal>)}
        </section>
    )
}