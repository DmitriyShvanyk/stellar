import { FC, useEffect } from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from '../../services/hooks'
import { Location } from 'history'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { AppHeader } from '../app-header/app-header'
import { Main } from '../main/main'
import { Title } from '../title/title'
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
} from '../../pages'

import { getData } from '../../services/actions/data'
import { closeDataModal } from '../../services/actions/modal-data'
import { closeFeedModal } from '../../services/actions/modal-feed'

import { getUserInfo } from '../../services/actions/user'
import { getCookie } from '../../services/utils'

import styles from './app.module.css'

import { useTranslation } from "react-i18next"

interface ILocationState extends Location {
  background?: Location<unknown>;
}

const App: FC = () => {
  const dispatch = useDispatch()
  const location = useLocation<ILocationState>()
  const history = useHistory()
  const { hasError, isLoading } = useSelector(state => state.data)
  const background = (history.action === 'PUSH' || history.action === 'REPLACE') && location.state && location.state.background
  const accessToken = getCookie('accessToken')
  const { t } = useTranslation()

  const onCloseDataModal = () => {
    dispatch(closeDataModal())
    history.goBack()
  }

  const onCloseFeedModal = () => {
    dispatch(closeFeedModal())
    history.goBack()
  }

  useEffect(() => {
    dispatch(getData())
    accessToken && dispatch(getUserInfo())
  }, [dispatch]);

  return (
    <div className={`${styles.app} text-center`}>
      <AppHeader />
      <Main>
        <Switch location={background || location}>
          <Route path="/" exact>
            {isLoading ? <Loader /> : (hasError ? <Error /> :
              <DndProvider backend={HTML5Backend}>
                <div className="content">
                  <Title text={ t('title') } />
                  <div className="grid-cols-2 gap-x-8 lg:grid">
                    <BurgerIngredients />
                    <BurgerConstructor />
                  </div>
                </div>
              </DndProvider>
            )}
          </Route>
          <Route path="/ingredients/:id" exact>
            <IngredientDetails />
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
            {<Route path="/ingredients/:id" exact>
              <Modal modalHeader={t('ingredientDetailsTitle')} handleClose={onCloseDataModal}>
                {isLoading ? <Loader /> : (hasError ? <Error /> :
                  (<IngredientDetails />)
                )}
              </Modal>
            </Route>}
            <Route path="/feed/:id" exact>
              <Modal handleClose={onCloseFeedModal}>
                {isLoading ? <Loader /> : (hasError ? <Error /> :
                  (<PageFeedCard />)
                )}
              </Modal>
            </Route>
            <ProtectedRouteProfile path="/profile/orders/:id" exact>
              <Modal handleClose={onCloseFeedModal}>
                {isLoading ? <Loader /> : (hasError ? <Error /> :
                  (<PageOrderHistoryCard />)
                )}
              </Modal>
            </ProtectedRouteProfile>
          </>
        )}
      </Main>
    </div>
  )
}

export default App