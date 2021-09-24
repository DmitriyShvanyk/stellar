import { FC } from 'react'
import { useSelector } from '../../services/hooks'
import { Redirect, Route, RouteProps } from 'react-router-dom'

export const ProtectedRouteProfile: FC<RouteProps> = ({ children, ...rest }) => {
    const { isLoggined } = useSelector(state => state.user)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggined ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
            }
        />
    )
}