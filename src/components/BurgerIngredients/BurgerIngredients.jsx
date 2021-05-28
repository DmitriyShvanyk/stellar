import React, { useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import data from '../../utils/data'
import styles from './BurgerIngredients.module.css'
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient.jsx'


const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('bun')
    const refBun = React.createRef(null)
    const refSauce = React.createRef(null)
    const refMain = React.createRef(null)

    const optionsScroll = {
        block: "start", 
        behavior: "smooth"
    }
 
    const scrollToBun = () => {
        setCurrent('bun')
        refBun.current.scrollIntoView(optionsScroll)
    }

    const scrollToSauce = () => {
        setCurrent('sauce')
        refSauce.current.scrollIntoView(optionsScroll)
    }

    const scrollToMain = () => {
        setCurrent('main')
        refMain.current.scrollIntoView(optionsScroll)
    }

    return (
        <section className={`${styles.BurgerIngredients}`}>
            <div className="tabs">
                <div className="tabs__list">
                    <Tab value="bun" active={current === 'bun'} onClick={scrollToBun}>Булки</Tab>
                    <Tab value="sauce" active={current === 'sauce'} onClick={scrollToSauce}>Соусы</Tab>
                    <Tab value="main" active={current === 'main'} onClick={scrollToMain}>Начинки</Tab>
                    <span className="tabs__line"></span>
                </div>   
                <div className={`${styles.BurgerIngredients__box} mt-10 scrollbar-vertical`}>
                    <div className={`${styles.BurgerIngredients__inner}`} ref={refBun}>
                        <div className={`${styles.BurgerIngredients__head} mb-6`}>
                            <h2 className={`${styles.BurgerIngredients__title}`}>Булки</h2>
                        </div>
                        <div className={styles.BurgerIngredients__body}>
                            <div className={styles.BurgerIngredients__columns}>
                                {data.map((data, index) => {

                                    if (data.type === "bun") {
                                        return (
                                            <BurgerIngredient {...data} key={data._id} />                                            
                                        )
                                    }

                                })}
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.BurgerIngredients__inner}`} ref={refSauce}>
                        <div className={`${styles.BurgerIngredients__head} mb-6`}>
                            <h2 className={`${styles.BurgerIngredients__title}`}>Соусы</h2>
                        </div>
                        <div className={styles.BurgerIngredients__body}>
                            <div className={styles.BurgerIngredients__columns}>
                                {data.map((data, index) => {

                                    if (data.type === "sauce") {
                                        return (
                                            <BurgerIngredient {...data} key={data._id} />    
                                        )
                                    }

                                })}
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${styles.BurgerIngredients__inner}`} ref={refMain}>
                        <div className={`${styles.BurgerIngredients__head} mb-6`}>
                            <h2 className={`${styles.BurgerIngredients__title}`}>Начинки</h2>
                        </div>
                        <div className={styles.BurgerIngredients__body}>
                            <div className={styles.BurgerIngredients__columns}>
                                {data.map((data, index) => {

                                    if (data.type === "main") {
                                        return (
                                            <BurgerIngredient {...data} key={data._id} />    
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