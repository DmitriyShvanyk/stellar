import React from 'react';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import data from '../../utils/data'
import styles from './BurgerConstructor.module.css'
import Modal from '../Modal/Modal'
import Order from '../Order/Order'


class BurgerConstructor extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: data,
            showModal: false
        };
    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <section className={`${styles.burgerConstructor}`}>
                {
                    <div className={`${styles.burgerConstructor__inner}`}>
                        <div className={`${styles.burgerConstructor__head}`}>
                            {this.state.data.map((data: any, index: number) => {

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
                            {this.state.data.map((data: any, index: number) => {

                                if (data.type !== 'bun' && data._id !== '60666c42cc7b410027a1a9b1') {
                                    return (
                                        <div className={`${styles.burgerConstructor__item}`} key={data._id}>
                                            <button className={`${styles.burgerConstructor__drag}`}>
                                                <DragIcon type="secondary" />
                                            </button>
                                            <ConstructorElement
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
                        <div className={`${styles.burgerConstructor__foot}`}>
                            {this.state.data.map((data: any, index: number) => {

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
                        <p className={`${styles.burgerConstructor__value} text text_type_digits-medium pr-2`}>610</p>
                        <CurrencyIcon type="secondary" />
                    </div>
                    <div className={styles.burgerConstructor__order}>
                        <Button type="primary" size="medium" onClick={this.openModal}>
                            Оформить заказ
                        </Button>
                        <Modal show={this.state.showModal} handleClose={this.closeModal}>
                            <Order />
                        </Modal>
                    </div>
                </div>
            </section>
        )
    }
}

export default BurgerConstructor;