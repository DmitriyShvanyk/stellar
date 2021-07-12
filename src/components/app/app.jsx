import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import AppHeader from '../app-header/app-header'
import Main from '../main/main'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { IngredientDetails } from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import Loader from '../loader/loader'
import Error from '../error/error'

import {
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Feed,
  FeedCard,
  Profile,
  ProfileForm,
  OrderHistory,
  OrderHistoryCard,

  Page404,
} from '../../pages/';

import { getData } from '../../services/actions/data'
import { closeDataModal } from '../../services/actions/modal-data'

import styles from './app.module.css'


const App = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const { hasError, isLoading } = useSelector((store) => store.data)
  //const { currentIngredient, isModalDataOpened } = useSelector((store) => store.modalData)

  let background = history.action === 'PUSH' && location.state && location.state.background;

  const closeModal = () => {
    dispatch(closeDataModal())
    history.goBack();
  }

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main>
        <Switch location={background || location}>
          <Route path="/" exact>
            {isLoading ? <Loader /> : (hasError ? <Error /> :
              <DndProvider backend={HTML5Backend}>
                <div className="content">
                  <h1 className="content__title text text_type_main-large mt-5 mb-5">
                    Соберите бургер
                  </h1>
                  <div className="content__body">
                    <BurgerIngredients />
                    <BurgerConstructor />
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
            <Feed />
          </Route>
          <Route path="/feed/:id" exact>
            <FeedCard />
          </Route>
          <Route path="/profile" exact>
            <Profile>
              <ProfileForm />
            </Profile>
          </Route>
          <Route path="/profile/orders" exact>
            <Profile>
              <OrderHistory />
            </Profile>
          </Route>
          <Route path="/profile/orders/:id" exact>
            <OrderHistoryCard />
          </Route>
          <Route path="/ingredients/:id" exact>
            <IngredientDetails />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        {background && (
          <Route path="/ingredients/:id" exact>
            <Modal modalHeader="Детали ингредиента" handleClose={closeModal}>
              {isLoading ? <Loader /> : (hasError ? <Error /> :
                (<IngredientDetails />)
              )}              
            </Modal>
          </Route>
        )}
      </Main>
    </div>
  )
}

export default App;