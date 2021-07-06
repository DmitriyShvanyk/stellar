import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import AppHeader from '../app-header/app-header'
import Main from '../main/main'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Loader from '../loader/loader'
import Error from '../error/error'
import { getData } from '../../services/actions/data'

import Page404 from '../../pages/page404/page404'


import styles from './app.module.css'


const App = () => {
  const dispatch = useDispatch()
  const { hasError, isLoading } = useSelector((store) => store.data)

  useEffect(() => {
		dispatch(getData());    
	}, [dispatch]); 

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main>
        {isLoading ? <Loader /> : (hasError ? <Error /> : 
          <DndProvider backend={HTML5Backend}>                    
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
          </DndProvider>)}               
      </Main>
      <Router>
        <Switch>
          <Route>
            <Page404 />
          </Route>
        </Switch> 
      </Router>           
    </div>
  )
}

export default App;