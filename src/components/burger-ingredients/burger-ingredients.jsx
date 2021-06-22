import React, { useEffect, useRef, useState, useMemo, useContext } from 'react'
//import PropTypes from 'prop-types'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredient from '../burger-ingredient/burger-ingredient'
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category'
import styles from './burger-ingredients.module.css'
import { DataContext } from '../../services/context.js';
import { useInView } from 'react-intersection-observer'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'


const BurgerIngredients = () => {
    const { data, setData } = useContext(DataContext)
    const [current, setCurrent] = useState('bun')
    const ingredientsRef = useRef(null)

    const [bunRef, inViewBuns] = useInView({ threshold: .1 });
    const [sauceRef, inViewSauces] = useInView({ threshold: .1 });
    const [mainRef, inViewMains] = useInView({ threshold: .1 });

    const [currentIngredient, setCurrentIngredient] = useState(null);
    const [openModal, setOpenModal] = useState(false)

    const handleScroll = () => {
        if (inViewBuns) {
            setCurrent("bun")
        }
        else if (inViewSauces) {
            setCurrent("sauce")
        }
        else if (inViewMains) {
            setCurrent("main")
        }
    }

    useEffect(() => {
        handleScroll();
    }, [inViewBuns, inViewMains, inViewSauces]);


    const getClickScroll = (type, ref) => {
        setCurrent(type)
        ref.current && ref.current.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    }

    const handleOpenModalIngredient = (item) => {
        setCurrentIngredient(item)
        setOpenModal(true);
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    /*const bunIngredients = useMemo(() => data && data.map((item, index) => {
        console.log(data)
        if (item.type === 'bun'){            
            return (<BurgerIngredient key={item._id} {...item} />)
        }        
    }), []);*/

    const dataBun = data && data.filter(item => item.type === 'bun')
    const dataSauce = data && data.filter(item => item.type === 'sauce')
    const dataMain = data && data.filter(item => item.type === 'main')

    return (
        <>
            <section className={`${styles.burgerIngredients}`}>
                <div className="tabs">
                    <div className="tabs__list">
                        <Tab value="bun" active={current === 'bun'} onClick={() => getClickScroll('bun', bunRef)}>Булки</Tab>
                        <Tab value="sauce" active={current === 'sauce'} onClick={() => getClickScroll('sauce', sauceRef)}>Соусы</Tab>
                        <Tab value="main" active={current === 'main'} onClick={() => getClickScroll('main', mainRef)}>Начинки</Tab>
                        <span className="tabs__line"></span>
                    </div>
                    <div className={`${styles.burgerIngredients__box} mt-10 scrollbar-vertical`} onChange={handleScroll} ref={ingredientsRef}>
                        <div className={`${styles.burgerIngredients__inner}`} ref={bunRef}>
                            <BurgerIngredientsCategory categoryHeader="Булки">
                                {dataBun.map(item => <BurgerIngredient key={item._id} item={item} handleOpenModalIngredient={handleOpenModalIngredient} />)}
                            </BurgerIngredientsCategory>
                        </div>
                        <div className={`${styles.burgerIngredients__inner}`} ref={sauceRef}>
                            <BurgerIngredientsCategory categoryHeader="Соусы">
                                {dataSauce.map(item => <BurgerIngredient key={item._id} item={item} handleOpenModalIngredient={handleOpenModalIngredient} />)}
                            </BurgerIngredientsCategory>
                        </div>
                        <div className={`${styles.burgerIngredients__inner}`} ref={mainRef}>
                            <BurgerIngredientsCategory categoryHeader="Начинки">
                                {dataMain.map(item => <BurgerIngredient key={item._id} item={item} handleOpenModalIngredient={handleOpenModalIngredient} />)}
                            </BurgerIngredientsCategory>
                        </div>
                    </div>
                </div>
            </section>
            {
                openModal &&
                (<Modal modalHeader="Детали ингредиента" handleClose={closeModal}>
                    {<IngredientDetails item={currentIngredient} />}
                </Modal>)
            }
        </>
    )
}

export default BurgerIngredients;