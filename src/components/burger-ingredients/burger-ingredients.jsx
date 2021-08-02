import { useEffect, useRef, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredient from '../burger-ingredient/burger-ingredient'
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category'

import { openDataModal } from '../../services/actions/modal-data'

import styles from './burger-ingredients.module.css'


const BurgerIngredients = () => {
    const { data } = useSelector((store) => store.data)    
    const [current, setCurrent] = useState('bun')
    const ingredientsRef = useRef(null)
    const [bunRef, inViewBuns] = useInView({ threshold: .1 })
    const [sauceRef, inViewSauces] = useInView({ threshold: .1 })
    const [mainRef, inViewMains] = useInView({ threshold: .1 })

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
        /*ref?.current?.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });*/
    }

    const dataBun = useMemo(() => data && data.filter((item) => item.type === 'bun'), [data]);
    const dataSauce = useMemo(() => data && data.filter((item) => item.type === 'sauce'), [data]);
    const dataMain = useMemo(() => data && data.filter((item) => item.type === 'main'), [data]);

    return (
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
                        {<BurgerIngredientsCategory categoryHeader="Булки">
                            {dataBun.map(item => <BurgerIngredient key={item._id} item={item} openDataModal={openDataModal} />)}
                        </BurgerIngredientsCategory>}
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={sauceRef}>
                        {<BurgerIngredientsCategory categoryHeader="Соусы">
                            {dataSauce.map(item => <BurgerIngredient key={item._id} item={item} openDataModal={openDataModal} />)}
                        </BurgerIngredientsCategory>}
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={mainRef}>
                        {<BurgerIngredientsCategory categoryHeader="Начинки">
                            {dataMain.map(item => <BurgerIngredient key={item._id} item={item} openDataModal={openDataModal} />)}
                        </BurgerIngredientsCategory>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients;