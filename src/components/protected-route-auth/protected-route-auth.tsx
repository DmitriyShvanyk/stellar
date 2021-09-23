import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { RootState } from '../../services/root-reducer'

interface LocationState {
    from: { pathname: string };
}

export const ProtectedRouteAuth: FC<RouteProps> = ({ children, ...rest }) => {
    const { isLoggined } = useSelector((state: RootState) => state.user)

    return (
        <Route
            {...rest}
            render={({ location }) => {
                const state = location.state as LocationState
                return isLoggined ? <Redirect to={state?.from?.pathname || '/'} /> : children
            }}
        />
    )
}