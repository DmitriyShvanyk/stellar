import { useEffect, useState, useContext } from 'react'
import AppHeader from '../app-header/app-header'
import Main from '../main/main'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Loader from '../loader/loader'
import Error from '../error/error'
import { API_LINK_INGREDIENTS } from '../../services/api.js'
import { DataContext } from '../../services/context.js';
import styles from './app.module.css'

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = () => {
      setLoading(true)

      fetch(API_LINK_INGREDIENTS)
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Something went wrong')
          }
        })
        .then((response) => {
          if (response && response.success) {
            setLoaded(true)            
            setData(response.data)  
            setLoading(false)                     
          }
        })
        .catch(() => {
          setHasError(true)
          setLoaded(false)          
        })
        .finally(() => {
          setLoading(false)          
        });

    }
    getData()
  }, [])


  return (
    <div className={styles.app}>
      <AppHeader />
      <Main>
        {hasError && !loading && !loaded && (<Error />)}
        {loading && !hasError && !loaded && (<Loader />)}
        {loaded && !hasError && !loading && (
          <DataContext.Provider value={{ data, setData }}>                    
            <div className="content">
              <h1 className="content__title text text_type_main-large mt-5 mb-5">
                Соберите бургер
              </h1>
              <div className="content__columns">
                <div className="content__column">
                  {<BurgerIngredients />}
                </div>
                <div className="content__column">
                  {<BurgerConstructor />}
                </div>
              </div>
            </div>
          </DataContext.Provider>
        )}
      </Main>
    </div>
  )
}

export default App;