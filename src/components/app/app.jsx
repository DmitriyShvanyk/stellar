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

import Login from '../../pages/login/login'
import Register from '../../pages/register/register'
import ForgotPassword from '../../pages/forgot-password/forgot-password'
import ResetPassword from '../../pages/reset-password/reset-password'
import Feed from '../../pages/feed/feed'

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
        <Router>
          <Switch>
            <Route path="/" exact>
              {isLoading ? <Loader /> : (hasError ? <Error /> :
                <DndProvider backend={HTML5Backend}>
                  <div className="content">
                    <h1 className="content__title text text_type_main-large mt-5 mb-5">
                      Соберите бургер
                    </h1>
                    <div className="content__body">
                      {<BurgerIngredients />}
                      {<BurgerConstructor />}
                    </div>
                  </div>
                </DndProvider>)}
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/forgot-password" exact>
              <ForgotPassword />
            </Route>
            <Route path="/reset-password" exact>
              <ResetPassword />
            </Route>
            <Route path="/feed" exact>
              {<Feed />}
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </Router>
      </Main>
    </div>
  )
}

export default App;