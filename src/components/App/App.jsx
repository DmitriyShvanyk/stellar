import React, { useEffect, useState } from 'react'
import AppHeader from '../app-header/app-header.jsx'
import Main from '../main/main.jsx'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import Loader from '../loader/loader'
import Error from '../error/error.jsx'
import { API_LINK } from '../../utils/api.js'
import styles from './app.module.css'


const App = () => {
  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const getData = () => {
    setLoading(true)

    fetch(`${API_LINK}ingredients`).then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then((json) => {
        setIngredients(json.data)
        setLoading(false)
      })
      .catch(() => {        
        setHasError(true)
      }).finally(() => {
        setLoading(false)
      });
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main>
        {loading ?
          (<Loader />) :
          (hasError ? <Error /> :
            <div className="content">
              <h1 className="content__title text text_type_main-large mt-5 mb-5">
                Соберите бургер
              </h1>
              <div className="content__columns">
                <div className="content__column">
                  {<BurgerIngredients data={ingredients} />}
                </div>
                <div className="content__column">
                  {<BurgerConstructor data={ingredients} />}
                </div>
              </div>
            </div>
          )
        }
      </Main>
    </div>
  );
}

export default App;