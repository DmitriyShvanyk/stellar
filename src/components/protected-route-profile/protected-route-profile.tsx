import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { RootState } from '../../services/root-reducer'

export const ProtectedRouteProfile: FC<RouteProps> = ({ children, ...rest }) => {
    const { isLoggined } = useSelector((state: RootState) => state.user)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggined ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
            }
        />
    )
}