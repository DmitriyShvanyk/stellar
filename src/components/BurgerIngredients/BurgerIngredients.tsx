import React from 'react';
import { Tab, Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import data from '../../utils/data'
import Modal from '../Modal/Modal'
import styles from './BurgerIngredients.module.css'
import '../IngredientInfo/ingredientInfo.css'

class BurgerIngredients extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: data,
            current: 'bun',
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

    onTabClick1 = () => {
        this.setState({ 
            current: 'bun' 
        })    
    }

    onTabClick2 = () => {
        this.setState({ 
            current: 'sauce' 
        })
    }

    onTabClick3 = () => {
        this.setState({ 
            current: 'main' 
        })
    };

    render() {

        return (
            <section className={`${styles.BurgerIngredients}`}>

                <div className="tabs">
                    <Tab value="bun" active={this.state.current === 'bun'}  onClick={this.onTabClick1}>Булки</Tab>
                    <Tab value="sauce" active={this.state.current === 'sauce'} onClick={this.onTabClick2}>Соусы</Tab>
                    <Tab value="main" active={this.state.current === 'main'} onClick={this.onTabClick3}>Начинки</Tab>

                    <div className={`${styles.BurgerIngredients__box} mt-10 scrollbar-vertical`}>
                        <div className={`${styles.BurgerIngredients__inner}`} id="bun">
                            <div className={`${styles.BurgerIngredients__head} mb-6`}>
                                <h2 className={`${styles.BurgerIngredients__title}`}>Булки</h2>
                            </div>
                            <div className={styles.BurgerIngredients__body}>
                                <div className={styles.BurgerIngredients__columns}>
                                    {this.state.data.map((data: any, index: number) => {

                                        if (data.type === "bun") {
                                            return (
                                                <div className={`${styles.BurgerIngredients__column} mb-6`} key={data._id}>
                                                    <a href="#" className={styles.BurgerIngredients__item} onClick={this.openModal}>
                                                        <div className={styles.BurgerIngredients__pict}>
                                                            {(data.__v !== 0 ? (<Counter count={data.__v} size="default" />) : null)}
                                                            <img className={styles.BurgerIngredients__img} loading="lazy" src={data.image} alt={data.name} />
                                                        </div>
                                                        <div className={styles.BurgerIngredients_content}>
                                                            <div className={`${styles.BurgerIngredients__price} text text_type_main-medium mb-2`}>
                                                                <span className={`${styles.BurgerIngredients__value} mr-3`}>{data.price}</span>
                                                                <CurrencyIcon type="secondary" />
                                                            </div>
                                                            <div className={`${styles.BurgerIngredients__name} text`}>{data.name}</div>
                                                        </div>
                                                        <span className={styles.BurgerIngredients__add}>Добавить</span>
                                                    </a>
                                                </div>
                                            )
                                        }

                                    })}
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.BurgerIngredients__inner}`} id="sauce">
                            <div className={`${styles.BurgerIngredients__head} mb-6`}>
                                <h2 className={`${styles.BurgerIngredients__title}`}>Соусы</h2>
                            </div>
                            <div className={styles.BurgerIngredients__body}>
                                <div className={styles.BurgerIngredients__columns}>
                                    {this.state.data.map((data: any, index: number) => {

                                        if (data.type === "sauce") {
                                            return (
                                                <div className={`${styles.BurgerIngredients__column} mb-6`} key={data._id}>
                                                    <a href="#" className={styles.BurgerIngredients__item} onClick={this.openModal}>
                                                        <div className={styles.BurgerIngredients__pict}>
                                                            {(data.__v !== 0 ? (<Counter count={data.__v} size="default" />) : null)}
                                                            <img className={styles.BurgerIngredients__img} loading="lazy" src={data.image} alt={data.name} />
                                                        </div>
                                                        <div className={styles.BurgerIngredients_content}>
                                                            <div className={`${styles.BurgerIngredients__price} text text_type_main-medium mb-2`}>
                                                                <span className={`${styles.BurgerIngredients__value} mr-3`}>{data.price}</span>
                                                                <CurrencyIcon type="secondary" />
                                                            </div>
                                                            <div className={`${styles.BurgerIngredients__name} text`}>{data.name}</div>
                                                        </div>
                                                        <span className={styles.BurgerIngredients__add}>Добавить</span>
                                                    </a>
                                                </div>
                                            )
                                        }

                                    })}
                                </div>
                            </div>
                        </div>
                        
                        <div className={`${styles.BurgerIngredients__inner}`} id="main">
                            <div className={`${styles.BurgerIngredients__head} mb-6`}>
                                <h2 className={`${styles.BurgerIngredients__title}`}>Начинки</h2>
                            </div>
                            <div className={styles.BurgerIngredients__body}>
                                <div className={styles.BurgerIngredients__columns}>
                                    {this.state.data.map((data: any, index: number) => {

                                        if (data.type === "main") {
                                            return (
                                                <div className={`${styles.BurgerIngredients__column} mb-6`} key={data._id}>
                                                    <a href="#" className={styles.BurgerIngredients__item} onClick={this.openModal}>
                                                        <div className={styles.BurgerIngredients__pict}>
                                                            {(data.__v !== 0 ? (<Counter count={data.__v} size="default" />) : null)}
                                                            <img className={styles.BurgerIngredients__img} loading="lazy" src={data.image} alt={data.name} />
                                                        </div>
                                                        <div className={styles.BurgerIngredients_content}>
                                                            <div className={`${styles.BurgerIngredients__price} text text_type_main-medium mb-2`}>
                                                                <span className={`${styles.BurgerIngredients__value} mr-3`}>{data.price}</span>
                                                                <CurrencyIcon type="secondary" />
                                                            </div>
                                                            <div className={`${styles.BurgerIngredients__name} text`}>{data.name}</div>
                                                        </div>
                                                        <span className={styles.BurgerIngredients__add}>Добавить</span>
                                                    </a>
                                                </div>
                                            )
                                        }

                                    })}
                                </div>
                            </div>
                        </div>

                    </div>

                    <Modal show={this.state.showModal} handleClose={this.closeModal}>                       
                        <div className="ingredient-info">
                            <h2 className="ingredient-info__title text text_type_main-large">
                                Детали ингредиента
                            </h2>
                            <div className="ingredient-info__body">
                                <div className="ingredient-info__pict mb-4">
                                    <img className="ingredient-info__img" src="https://code.s3.yandex.net/react/code/bun-02-large.png" alt="" />
                                </div>
                                <h3 className="ingredient-info__name text text_type_main-medium mb-8">
                                    tttt
                                </h3>
                                <ul className="ingredient-info__list text_color_inactive">
                                    <li className="ingredient-info__item">
                                        <span className="ingredient-info__text">Калории,ккал</span>
                                        <span className="ingredient-info__value text text_type_digits-default mt-2">
                                            1
                                        </span>
                                    </li>
                                    <li className="ingredient-info__item">
                                        <span className="ingredient-info__text">Белки, г</span>
                                        <span className="ingredient-info__value text text_type_digits-default mt-2">
                                            2
                                        </span>
                                    </li>
                                    <li className="ingredient-info__item">
                                        <span className="ingredient-info__text">Жиры, г</span>
                                        <span className="ingredient-info__value text text_type_digits-default mt-2">
                                            3
                                        </span>
                                    </li>
                                    <li className="ingredient-info__item">
                                        <span className="ingredient-info__text">Углеводы, г</span>
                                        <span className="ingredient-info__value text text_type_digits-default mt-2">
                                            4
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Modal>
                </div>

            </section>
        )
    }
}

export default BurgerIngredients;