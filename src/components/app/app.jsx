import { useEffect } from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { AppHeader } from '../app-header/app-header'
import { Main } from '../main/main'
import { Title } from '../../components/title/title'
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients'
import { BurgerConstructor } from '../burger-constructor/burger-constructor'
import { IngredientDetails } from '../ingredient-details/ingredient-details'
import { Modal } from '../modal/modal'
import { Loader } from '../loader/loader'
import { Error } from '../error/error'

import { ProtectedRouteAuth } from '../protected-route-auth/protected-route-auth'
import { ProtectedRouteProfile } from '../protected-route-profile/protected-route-profile'
import { ProtectedRoutePasswordReset } from '../protected-route-password-reset/protected-route-password-reset'

import {
  PageRegister,
  PageLogin,
  PageForgotPassword,
  PageResetPassword,
  PageFeed,
  PageFeedCard,
  PageProfile,
  PageProfileForm,
  PageOrderHistory,
  PageOrderHistoryCard,
  Page404,
} from '../../pages/'

import { getData } from '../../services/actions/data'
import { closeDataModal } from '../../services/actions/modal-data'
import { closeFeedModal } from '../../services/actions/modal-feed'

import { getUserInfo } from '../../services/actions/user'
import { getCookie } from '../../services/utils.js'

import styles from './app.module.css'


const App = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()  
  const { hasError, isLoading } = useSelector(state => state.data)
  const background = history.action === 'PUSH' && location.state && location.state.background  
  const accessToken = getCookie('accessToken')

  const onCloseDataModal = () => {
    dispatch(closeDataModal())
    history.goBack()
  }

  const onCloseFeedModal = () => {
    dispatch(closeFeedModal())
    history.goBack()
  }

  useEffect(() => {
    dispatch(getData());
    accessToken && dispatch(getUserInfo())
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
                  <Title text="Соберите бургер" />
                  <div className="content__body">
                    <BurgerIngredients />
                    <BurgerConstructor />
                  </div>
                </div>
              </DndProvider>
              )}
          </Route>
          <ProtectedRouteAuth path="/register" exact>
            <PageRegister />
          </ProtectedRouteAuth>
          <ProtectedRouteAuth path="/login" exact>
            <PageLogin />
          </ProtectedRouteAuth>
          <ProtectedRouteAuth path="/forgot-password" exact>
            <PageForgotPassword />
          </ProtectedRouteAuth>
          <ProtectedRoutePasswordReset path="/reset-password" exact>
            <PageResetPassword />
          </ProtectedRoutePasswordReset>
          <ProtectedRouteProfile path="/profile" exact>
            <PageProfile>
              <PageProfileForm />
            </PageProfile>
          </ProtectedRouteProfile>
          <ProtectedRouteProfile path="/profile/orders" exact>
            <PageProfile>
              <PageOrderHistory />
            </PageProfile>
          </ProtectedRouteProfile>
          <ProtectedRouteProfile path="/profile/orders/:id" exact>
            <PageOrderHistoryCard />
          </ProtectedRouteProfile>
          <Route path="/ingredients/:id" exact>
            <IngredientDetails />
          </Route>
          <Route path="/feed" exact>
            <PageFeed />
          </Route>
          <Route path="/feed/:id" exact>
            <PageFeedCard />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        {background && (
          <>
            {<Route path="/ingredients/:id" exact children={              
              <Modal modalHeader="Детали ингредиента" handleClose={onCloseDataModal}>
                {isLoading ? <Loader /> : (hasError ? <Error /> :
                  (<IngredientDetails />)
                )}
              </Modal>}>
            </Route>}
            <Route path="/feed/:id" exact children={
              <Modal handleClose={onCloseFeedModal}>
                {isLoading ? <Loader /> : (hasError ? <Error /> :
                  (<PageFeedCard />)
                )}
              </Modal>}>
            </Route>
            <ProtectedRouteProfile path="/profile/orders/:id" exact children={
              <Modal handleClose={onCloseFeedModal}>
                {isLoading ? <Loader /> : (hasError ? <Error /> :
                  (<PageOrderHistoryCard />)
                )}
              </Modal>}>
            </ProtectedRouteProfile>
          </>
        )}
      </Main>
    </div>
  )
}

export default App