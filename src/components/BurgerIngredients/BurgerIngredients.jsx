import React, { useEffect } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'
import styles from './burgerIngredients.module.css'


const BurgerIngredients = ({ data }) => {
    const [current, setCurrent] = React.useState('bun')
    const bunRef = React.createRef(null)
    const sauceRef = React.createRef(null)
    const mainRef = React.createRef(null)

    const optionsScroll = {
        block: "start",
        behavior: "smooth"
    }

    const getScroll = (type, elem) => {
        setCurrent(type)
        elem.current.scrollIntoView(optionsScroll)
    }

    return (
        <section className={`${styles.burgerIngredients}`}>
            <div className="tabs">
                <div className="tabs__list">
                    <Tab value="bun" active={current === 'bun'} onClick={() => getScroll('bun', bunRef)}>Булки</Tab>
                    <Tab value="sauce" active={current === 'sauce'} onClick={() => getScroll('sauce', sauceRef)}>Соусы</Tab>
                    <Tab value="main" active={current === 'main'} onClick={() => getScroll('main', mainRef)}>Начинки</Tab>
                    <span className="tabs__line"></span>
                </div>
                <div className={`${styles.burgerIngredients__box} mt-10 scrollbar-vertical`}>
                    <div className={`${styles.burgerIngredients__inner}`} ref={bunRef}>
                        <div className={`${styles.burgerIngredients__head} mb-6`}>
                            <h2 className={`${styles.burgerIngredients__title}`}>Булки</h2>
                        </div>
                        <div className={styles.burgerIngredients__body}>
                            <div className={styles.burgerIngredients__columns}>
                                {data.map((item, index) => {
                                    if (item.type === "bun") {
                                        return (
                                            <BurgerIngredient data={item} key={item._id} />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.burgerIngredients__inner}`} ref={sauceRef}>
                        <div className={`${styles.burgerIngredients__head} mb-6`}>
                            <h2 className={`${styles.burgerIngredients__title}`}>Соусы</h2>
                        </div>
                        <div className={styles.burgerIngredients__body}>
                            <div className={styles.burgerIngredients__columns}>
                                {data.map((item, index) => {
                                    if (item.type === "sauce") {
                                        return (
                                            <BurgerIngredient data={item} key={item._id} />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.burgerIngredients__inner}`} ref={mainRef}>
                        <div className={`${styles.burgerIngredients__head} mb-6`}>
                            <h2 className={`${styles.burgerIngredients__title}`}>Начинки</h2>
                        </div>
                        <div className={styles.burgerIngredients__body}>
                            <div className={styles.burgerIngredients__columns}>
                                {data.map((item, index) => {
                                    if (item.type === "main") {
                                        return (
                                            <BurgerIngredient data={item} key={item._id} />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default BurgerIngredients;