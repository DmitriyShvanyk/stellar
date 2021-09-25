import { FC } from 'react'
import { useSelector } from '../../services/hooks'
import { Redirect, Route, RouteProps } from 'react-router-dom'

interface LocationState {
    from: { pathname: string };
}

export const ProtectedRoutePasswordReset: FC<RouteProps> = ({ children, ...rest }) => {
    const { isLoggined } = useSelector(state => state.user)

    return (
        <Route
            {...rest}
            render={({ location }) => {
                const state = location.state as LocationState
                return isLoggined || String(state?.from) !== '/forgot-password' ? <Redirect to="/" /> : children
            }}
        />
    )
}